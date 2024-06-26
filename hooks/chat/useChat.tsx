/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { type ClientMessage } from '@/app/actions/AIProvider'
import { type RefObject, useEffect } from 'react'
interface IUseChat {
  msgContainer: RefObject<HTMLDivElement>
  messages: ClientMessage[]
}
export const useChatHook = ({ msgContainer, messages }: IUseChat) => {
  useEffect(() => {
    if (msgContainer !== null && msgContainer.current !== null) {
      msgContainer.current.scrollTop = msgContainer.current.scrollHeight
    }
  }, [messages])
}
