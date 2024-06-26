/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { type FormEvent, useState } from 'react'
import { type ClientMessage } from '@/app/actions/routeComponentschat4'
import { useActions, useUIState } from 'ai/rsc'
import { generateId } from 'ai'
import { type AI } from '@/app/actions/AIProvider'

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic'
export const maxDuration = 30

// export default function ChatFour () {
//   const [input, setInput] = useState<string>('')
//   // const [conversation, setConversation] = useUIState()
//   const [messages, setMessages] = useUIState()
//   const actions = useActions<typeof AI>()
//   console.log(actions)
//   console.log(actions.sendMessage)

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault()

//     setMessages([
//       ...messages,
//       { id: Date.now(), role: 'user', display: 'hola' }
//     ])

//     const response = await actions.sendMessage('hola')

//     setMessages([
//       ...messages,
//       { id: Date.now(), role: 'assistant', display: response }
//     ])
//   }

//   return (
//     <div>
//       <ul>
//         {messages.map(message => (
//           <li key={message.id}>{message.display}</li>
//         ))}
//       </ul>

//       <form onSubmit={handleSubmit}>
//         <input type="text" name="message" />
//         <button type="submit" className='bg-blue-500'>Send</button>
//       </form>
//     </div>
//   )
// }
export default function ChatFour () {
  const [input, setInput] = useState<string>('')
  const [conversation, setConversation] = useUIState()
  const { continueConversation } = useActions()

  return (
    <div>
      <div>
        {conversation.map((message: ClientMessage) => (
          <div key={message.id}>
            {message.role}: {message.display}
          </div>
        ))}
      </div>

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
            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              { id: generateId(), role: 'user', display: input }
            ])

            const message = await continueConversation(input)

            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              message
            ])
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  )
}
