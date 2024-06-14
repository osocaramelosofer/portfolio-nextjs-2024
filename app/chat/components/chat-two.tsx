'use client'
import { useChat } from '@ai-sdk/react'

export default function ChatTwo () {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
        <main>
            <ul>
                {messages.map(m => (
                <li
                    key={m.id}
                    className={`message ${m.role === 'user' ? 'user' : 'bot'}`}
                >
                    <span>{m.role === 'user' ? 'user' : 'AI'}</span>
                    <p>{m.content}</p>
                </li>
                ))}
            </ul>
        </main>

        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={handleInputChange}
                placeholder="This is the second chat..."
            />
            <button>Send</button>
        </form>

        <small>&nbsp;</small>

        <template id="message-template">
            <li className="message">
                <span></span>
                <p></p>
            </li>
        </template>
    </>
  )
}
