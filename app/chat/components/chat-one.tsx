/* eslint-disable array-callback-return */
'use client'
import { useChat } from '@ai-sdk/react'
import { type ToolInvocation } from 'ai'
import { ChatgptInputExample } from './chatgpt-input-example'
import { useEffect, useRef } from 'react'

export default function ChatOne () {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } = useChat({
    maxToolRoundtrips: 5,
    // run client-side tools that are automatically executed:
    async onToolCall ({ toolCall }) {
      if (toolCall.toolName === 'getLocation') {
        const cities = ['Mexico', 'oaxaca', 'New york']
        return cities[Math.floor(Math.random() * cities.length)]
      }
    }
  })
  // SHOW THE LAST MESSAGES
  const msgContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (msgContainer.current !== null) {
      msgContainer.current.scrollTop = msgContainer.current.scrollHeight
    }
  }, [messages])

  return (
    <>
        <section className='flex flex-col gap-y-2 max-h-[80vh] bg-white'>
          <div
            className='
              messages-container
              max-w-full h-[75vh]
              rounded-md
              border-[1px] border-solid border-[#ccc] shadow-xl
              p-2
              overflow-y-auto scroll-smooth'
              ref={msgContainer}
          >
            <ul className='overflow-auto flex-1'>
                {/* {Array.from({ length: 21 }).map((_, idx) => (
                  <li className='message' key={idx}>
                    <p >Me</p>
                    <span>hola</span>
                  </li>
                ))} */}
                {messages.map(m => (
                <li
                    key={m.id}
                    className={`message ${m.role === 'user' ? 'user' : 'bot'}`}
                >
                    <span>{m.role === 'user' ? 'user' : 'AI'}</span>
                    <p>{m.content}</p>

                    {m.toolInvocations?.map((toolInvocation: ToolInvocation) => {
                      const toolCallId = toolInvocation.toolCallId
                      if (toolInvocation.toolName === 'askForConfirmation') {
                        return (
                            <div key={toolCallId}>
                              { `que es esto? = ${toolInvocation.args.message}` }
                              <div>
                                {'result' in toolInvocation
                                  ? (
                                  <b>{toolInvocation.result}</b>
                                    )
                                  : (
                                  <>
                                    <button
                                      onClick={() => {
                                        addToolResult({
                                          toolCallId,
                                          result: 'Yes, confirmed.'
                                        })
                                      }}
                                      className='bg-blue-400 p-2 rounded-md'
                                    >
                                      Yes
                                    </button>
                                    <button
                                      onClick={() => {
                                        addToolResult({
                                          toolCallId,
                                          result: 'No, denied'
                                        })
                                      }
                                      }
                                      className='bg-orange-400 p-2 rounded-md'
                                    >
                                      No
                                    </button>
                                  </>
                                    )}
                              </div>
                            </div>
                        )
                      }

                      // other tools:
                      return 'result' in toolInvocation
                        ? (
                        <div key={toolCallId}>
                            Tool call {`${toolInvocation.toolName}: `}
                            {toolInvocation.result}
                        </div>
                          )
                        : (
                          <div key={toolCallId}>Calling {toolInvocation.toolName}...</div>
                          )
                    }
                    )}
                </li>
                ))}
            </ul>
          </div>

          <ChatgptInputExample
           input={input}
           handleInputChange={handleInputChange}
           handleSubmit={handleSubmit}
          />
        </section>
    </>
  )
}
