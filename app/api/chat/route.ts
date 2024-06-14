import { openai } from '@ai-sdk/openai'
import { streamText, tool } from 'ai'
import { z } from 'zod'
// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST (req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    tools: {
      places: tool({
        description: 'Suggest places to explore on a certain location',
        parameters: z.object({
          location: z.string().describe('The name of the location where want to explore')
        }),
        execute: async ({ location }) => ({
          location,
          places: 'Tacos la cruz'
        })
      })
    }
  })

  return result.toAIStreamResponse()
}
