'use client'
import { type ChatRequestOptions } from 'ai'
import { type FormEvent, useEffect, useRef, type ChangeEvent, type RefObject } from 'react'

interface IChatInputProps {
  input: string
  handleSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  msgContainer?: RefObject<HTMLDivElement>
}
export function ChatgptInputExample ({ input, handleSubmit, handleInputChange, msgContainer }: IChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  // INCREMENT TEXTAREA.HEIGHT WHEN INPUT AN BREAK LINE
  useEffect(() => {
    const textarea = textareaRef.current
    const adjustHeight = () => {
      if (textarea !== null) {
        textarea.style.height = '0px'
        const newHeight = textarea.scrollHeight
        textarea.style.height = `${newHeight}px`
      }
    }
    if (textarea !== null) {
      textarea.addEventListener('input', adjustHeight)
    }

    return () => {
      if (textarea !== null) {
        textarea.removeEventListener('input', adjustHeight)
      }
    }
  }, [])

  const sendMsg = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit(event)
    // SEE LAST MESSAGES WITHOUT SCROLLING YOURSELF, Al parecer no lo necesito jaja
    // if (msgContainer?.current !== null && msgContainer?.current !== undefined) {
    //   console.log('here:')
    //   msgContainer.current.scrollTop = msgContainer.current.scrollHeight
    // }
  }
  // SUBMIT FORM ON PRESS 'ENTER'
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.key === 'enter' || event.keyCode === 13) && !event.shiftKey) {
      event.preventDefault()
      if (formRef.current !== null) {
        // we pass event like that to avoid errors when calling handleSubmit of sendMsg function
        sendMsg(event as unknown as FormEvent<HTMLFormElement>)
      }
    }
  }

  return (
    <form onSubmit={sendMsg} ref={formRef}>
      <div className="flex w-full items-center">
          <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
            <div className="flex items-end gap-1.5 md:gap-2">
              <div><div className="flex flex-col">
                <button type="button" id="radix-:re:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0">
            </button>
            <button className="flex items-center justify-center text-token-text-primary juice:h-8 juice:w-8 dark:text-white juice:rounded-full focus-visible:outline-black dark:focus-visible:outline-white juice:mb-1 juice:ml-1.5" aria-disabled="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z" clipRule="evenodd">
                </path>
              </svg>
            </button>
            <div aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rg:" data-state="closed">
            </div>
            </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className='resize-none max-h-[25vh] h-7'
                onKeyDown={handleKeyDown}
            />
            </div>
              <button
              type='submit'
               className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
               >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl">
                <path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd">
                  </path>
                  </svg>
              </button>
            </div>
          </div>
        </div>
    </form>
  )
}