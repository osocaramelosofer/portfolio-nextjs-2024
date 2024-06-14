'use client'
import './chat.css'
import ChatTabs from './components/chat-tabs/chat-tabs'

export default function ChatPage () {
  return (
    <>
    <ChatTabs />
        {/* <main>
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
                placeholder="Write your message here..."
            />
            <button>Send</button>
        </form>

        <small>&nbsp;</small>

        <template id="message-template">
            <li className="message">
                <span></span>
                <p></p>
            </li>
        </template> */}
    </>
  )
}
