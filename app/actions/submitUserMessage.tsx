/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/return-await */
import { getMutableAIState, streamUI } from 'ai/rsc'
import { openai } from '@ai-sdk/openai'
import { z } from 'zod'
import { generateId } from 'ai'
import { type ServerMessage, type ClientMessage } from './AIProvider'
import { Flights } from '../chat/components/flights'
import { searchPlaces } from '@/services/search-places'

const searchFlights = async (
  source: string,
  destination: string,
  date: string
) => {
  return [
    {
      id: '1',
      flightNumber: 'AA123'
    },
    {
      id: '2',
      flightNumber: 'AA456'
    }
  ]
}
const LoadingComponent = ({ text }: { text: string }) => (
    <div className="animate-pulse p-4">{text}...</div>
)
const getWeather = async (location: string) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return '82°F️ ☀️'
}

interface WeatherProps {
  location: string
  weather: string
}

const WeatherComponent = (props: WeatherProps) => (
    <div className="border border-neutral-200 p-4 rounded-lg max-w-fit">
      The weather in {props.location} is {props.weather}
    </div>
)

const lookupFlight = async (flightNumber: string) => {
  return {
    flightNumber,
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM'
  }
}

export async function submitUserMessage (input: string): Promise<ClientMessage> {
  'use server'
  const history = getMutableAIState()
  // Update the AI state with the new user message.
  history.update([...history.get(), { role: 'user', content: input }])

  const result = await streamUI({
    model: openai('gpt-3.5-turbo'),
    system: 'You are an expert travel agent',
    messages: [...history.get(), { role: 'user', content: input }],
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          { role: 'assistant', content }
        ])
      }
      return <div className=''>{content}</div>
    },
    tools: {
      searchFlights: {
        description: 'search for flights',
        parameters: z.object({
          source: z.string().describe('The origin of the flight'),
          destination: z.string().describe('The destination of the flight'),
          date: z.string().describe('The date of the flight')
        }),
        generate: async function * ({ source, destination, date }) {
          // yield `Searching for flights from ${source} to ${destination} on ${date}...`
          yield <LoadingComponent text='Searching flights' />
          const results = await searchFlights(source, destination, date)

          return (
            <Flights flights={results} destination={destination} source={source} />
          )
        }
      },
      lookupFlight: {
        description: 'lookup details for a flight',
        parameters: z.object({
          flightNumber: z.string().describe('The flight number')
        }),
        generate: async function * ({ flightNumber }) {
          yield `Looking up details for flight ${flightNumber}...`
          const details = await lookupFlight(flightNumber)

          return (
            <div className='bg-[#4B4D4D] p-2 rounded-md font-semibold'>
              <div>Flight Number: {details.flightNumber}</div>
              <div>Departure Time: {details.departureTime}</div>
              <div>Arrival Time: {details.arrivalTime}</div>
            </div>
          )
        }
      },
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({ location: z.string() }),
        generate: async function * ({ location }) {
          yield <LoadingComponent text='Getting weather' />
          const weather = await getWeather(location)
          return <WeatherComponent weather={weather} location={location}/>
        }
      },
      searchPlaces: {
        description: 'Search suggestions of places on base a given destination and category(activities, hotels, clubs,  restaurants)',
        parameters: z.object({
          destination: z.string().describe('The location where the user wants the suggestions of the places'),
          category: z.string().describe('Number of people who are planned to go on the trip'),
          details: z.string().describe('Extra details')
        }),
        generate: async function * ({ destination, details, category }) {
          // yield `Searching for flights from ${source} to ${destination} on ${date}...`
          yield <LoadingComponent text='Searching Places' />
          const response = await searchPlaces({ destination, details, category })
          if (response && response.success) {
            const { places, suggestedPlaces } = response
            console.log('places:', places, suggestedPlaces)
            if (places) {
              return (
                <div>
                  <span>Suggested places:</span>
                  <div className='flex flex-wrap gap-2 items-center'>
                    {places.map((item, i: number) => {
                      return (
                        <div
                          key={item.placeId}
                          className='w-[180px] rounded-md p-4 flex flex-col flex-auto gap-y-3 bg-[#322e2e]'
                        >
                          <div className='w-full max-h-48 rounded-md'>
                            <img
                              className='object-cover h-full'
                              src={item.photosUrls[0]} alt="place photo"
                            />
                          </div>
                          <span className='bg-black rounded-sm text-center my-2'>
                              {item.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            } else {
              return (
                <div>
                  We could not find places for tha location, try with other one
                </div>
              )
            }
          }
        }
      }
    }
  })

  // return result.value
  return {
    id: generateId(),
    role: 'assistant',
    display: result.value
  }
}
