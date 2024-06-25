'use client'
import './chat.css'
import ChatTabs from './components/chat-tabs/chat-tabs'

export default function ChatPage () {
  return (
    <div className='wrapper px-10 mx-auto w-5/6'>
      <ChatTabs />
    </div>
  )
}
