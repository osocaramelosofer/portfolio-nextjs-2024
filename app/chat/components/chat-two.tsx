/* eslint-disable @typescript-eslint/no-misused-promises */
// DOCS:
// https://sdk.vercel.ai/examples/next-app/basics/generating-text
'use client'

import { useState } from 'react'
// import { getAnswer } from '@/app/actions/actions'
import { type Message, continueConversation } from '@/app/actions/continueConversation'

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default function ChatTwo () {
  // const [generation, setGeneration] = useState<string>('')
  const [conversation, setConversation] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')

  return (
    <>
        <main>
            <ul>
              {conversation.map((m, index) => (
                <div key={index}>
                    <li
                      className={`message ${m.role === 'user' ? 'user' : 'bot'}`}
                    >
                    <span>{m.role === 'user' ? 'user' : 'AI'}</span>
                    <p>
                      {m.role} :
                      {m.content}
                      {m.display}
                    </p>
                  </li>
                </div>
              ))}

            </ul>
        </main>

        <div>
          <input
            type="text"
            value={input}
            onChange={event => {
              setInput(event.target.value)
            }}
          />
          <button
            onClick={async () => {
              // const { messages } = await continueConversation([
              //   ...conversation,
              //   { role: 'user', content: input }
              // ])
              const { messages } = await continueConversation([
                ...conversation.map(({ role, content }) => ({ role, content })),
                { role: 'user', content: input }
              ])
              setConversation(messages)
              setInput('')
            }}
            className='bg-blue-500 p-2 rounded-md text-white'
          >
              Send Message
            </button>
        </div>
    </>
  )
}
