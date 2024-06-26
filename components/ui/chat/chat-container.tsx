'use client'

import { type ClientMessage } from '@/app/actions/AIProvider'
import { useChatHook } from '@/hooks/chat/useChat'
import { type ReactElement, useRef } from 'react'

interface IChatContainerProps {
  children: ReactElement<HTMLUListElement>
  messages: ClientMessage[]
}
export default function ChatContainer ({ children, messages }: IChatContainerProps) {
  const msgContainer = useRef <HTMLDivElement>(null)
  // THIS TAKES THE USER TO THE LAST MESSAGES AFTER SEND ONE
  useChatHook({ msgContainer, messages })
  return (
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
        {children}
    </div>
  )
}
