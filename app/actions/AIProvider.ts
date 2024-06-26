import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { createAI, getMutableAIState } from 'ai/rsc'
import { type ReactNode } from 'react'
import { continueConversation } from './routeComponentschat4'

// Define the AI state and UI state types
export interface ServerMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ClientMessage {
  id: string
  role: 'user' | 'assistant'
  display: ReactNode
}

export async function sendMessage (message: string) {
  'use server'

  const history = getMutableAIState()

  // Update the AI state with the new user message.
  history.update([...history.get(), { role: 'user', content: message }])

  const response = await generateText({
    model: openai('gpt-3.5-turbo'),
    messages: history.get()
  })

  // Update the AI state again with the response from the model.
  history.done([...history.get(), { role: 'assistant', content: response }])

  return response
}

export type AIState = ServerMessage[]
export type UIState = ClientMessage[]

// Create the AI provider with the initial states and allowed actions
export const AI = createAI<AIState, UIState>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    continueConversation
  }
})
