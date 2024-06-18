/* eslint-disable array-callback-return */
'use client'
import { useChat } from '@ai-sdk/react'
import { type ToolInvocation } from 'ai'
import { ChatgptInputExample } from './chatgpt-input-example'
import { useRef } from 'react'

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
  const msgContainer = useRef<HTMLUListElement>(null)

  return (
    <>
        <main className='flex flex-col h-full'>
          <div className='overflow-hidden flex-1'>
            <div className='react-scroll-to-bottom relative h-full'>
              <div className='react-scroll-to-bottom h-full overflow-y-auto w-full max-h-[550px]'>
                <ul ref={msgContainer} className='overflow-hidden flex-1 min-h-96'>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <li className='message' key={idx}>
                    <p >Me</p>
                    <span>hola</span>
                  </li>
                ))}
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
            </div>
          </div>

          <ChatgptInputExample
           input={input}
           handleInputChange={handleInputChange}
           handleSubmit={handleSubmit}
           msgContainer={msgContainer}
          />
        </main>
        {/* <form onSubmit={handleSubmit}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              style={{ overflow: 'hidden' }}
            />
            <button>Send</button>
        </form> */}

    </>
  )
}
