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
const LoadingComponent = () => (
    <div className="animate-pulse p-4">getting weather...</div>
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
    system: 'you are a flight booking assistant',
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
          yield <LoadingComponent />
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
          yield <LoadingComponent />
          const weather = await getWeather(location)
          return <WeatherComponent weather={weather} location={location}/>
        }
      },
      searchPlaces: {
        description: 'Search suggestions of places on base a given destination, budget',
        parameters: z.object({
          destination: z.string().describe('The location where the user wants the suggestions of the places'),
          budget: z.string().describe('The budget the user has to spend to visit those places'),
          people: z.number().describe('Number of people who are planned to go on the trip').nullish().default(null),
          details: z.string().describe('Extra details').nullish().default(null)
        }),
        generate: async function * ({ destination, budget, people, details }) {
          // yield `Searching for flights from ${source} to ${destination} on ${date}...`
          yield <LoadingComponent />
          const { babelonPlaces } = await searchPlaces({ destination, budget, people, details })
          const places = babelonPlaces.babelonActivities
          return (
            <div>
              <span>Suggested places:</span>
              <div className='flex flex-wrap gap-x-2 items-center'>
                {places.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className='w-[180px] rounded-md p-4 flex flex-col flex-auto gap-y-3 bg-[#322e2e]'
                    >
                      <div className='w-32 h-32 rounded-md'>
                        <img
                          className='w-full h-full object-cover'
                          src={item.photos[0]} alt="place photo"
                        />
                      </div>
                      <span className=''>
                          {item.name}
                      </span>
                      {/* <span>{item.rating}</span>
                      <span>{item.pricing}</span> */}
                    </div>
                  )
                })}
              </div>

            </div>
          )
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
