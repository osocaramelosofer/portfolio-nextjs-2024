'use server'

import { getMutableAIState, streamUI } from 'ai/rsc'
import { openai } from '@ai-sdk/openai'
import { type ReactNode } from 'react'
import { z } from 'zod'
import { generateId } from 'ai'
import { AvatarPhoto } from '@/app/chat/components/avatar-photo'

export interface ServerMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ClientMessage {
  id: string
  role: 'user' | 'assistant'
  display: ReactNode
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

export async function continueConversation (
  input: string
): Promise<ClientMessage> {
  'use server'

  const history = getMutableAIState()

  const result = await streamUI({
    model: openai('gpt-3.5-turbo'),
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
      showUserAvatarPicture: {
        description:
          'Show the avatar photo of the user',
        parameters: z.object({
          username: z
            .string()
            .describe('the name of the username is asking its avatar photo')
        }),
        generate: async ({ username }) => {
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: 'assistant',
              content: `Showing avatar photo of ${username}`
            }
          ])

          return <AvatarPhoto username={username} />
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
      }
    }
  })

  return {
    id: generateId(),
    role: 'assistant',
    display: result.value
  }
}
