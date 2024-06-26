/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { type FormEvent } from 'react'
import { useActions, useUIState } from 'ai/rsc'
import { generateId } from 'ai'
import { type ClientMessage } from '@/app/actions/AIProvider'
import ChatContainer from '@/components/ui/chat/chat-container'
import { ChatgptInput } from '@/components/ui/chat/chat-input'
import '@/components/ui/chat/chatStyles.css'

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default function ChatFour () {
  const [conversation, setConversation] = useUIState()
  const { continueConversation } = useActions()
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      { id: generateId(), role: 'user', display: event.target.message.value }
    ])

    const message = await continueConversation(event.target.message.value)

    setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      message
    ])
  }

  return (
    <section className='message-container flex flex-col gap-y-2 max-h-[80vh] bg-white'>
      <ChatContainer messages={conversation}>
        <ul className='flex flex-col list-none p-0'>
          {conversation.map((message: ClientMessage) => {
            if (message.role === 'user') {
              return userMessage(message)
            }
            if (message.role === 'assistant') {
              return botMessage(message)
            }
          })}
        </ul>
      </ChatContainer>

      <ChatgptInput handleSubmit={handleSubmit} />
    </section>
  )
}

const userMessage = (msg: ClientMessage) => {
  return (
    <li
      key={msg.id}
      className='message user'
    >
      <span>user</span>
      <p className='max-w-16 bg-blue-400'>
        {msg.display}
      </p>
    </li>
  )
}
const botMessage = (msg: ClientMessage) => {
  return (
    <li
      key={msg.id}
      className='message bot'
    >
      <span>AI</span>
      <div className='max-w-16 '>
        {msg.display}
      </div>
    </li>
  )
}
