'use client'
import { type FormEvent, useEffect, useRef } from 'react'

interface IChatInputProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  input: string
  setInput: (input: string) => void
}
export function ChatgptInput ({ handleSubmit, setInput, input }: IChatInputProps) {
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

  // SUBMIT FORM ON PRESS 'ENTER'
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (formRef.current !== null) {
        // CREATE A NEW FORM EVENT AND DISPATCH THAT EVENT
        const form = formRef.current
        const submitEvent = new Event('submit', { cancelable: true, bubbles: true })
        form.dispatchEvent(submitEvent)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
                name='message'
                value={input}
                onChange={e => { setInput(e.target.value) }}
                placeholder="Write your message here..."
                className='resize-none max-h-[25vh] h-7'
                onKeyDown={handleKeyDown}
            />
            </div>
              <button
                type='submit'
                className="px-2 bg-blue-500"
               >
                Send
              </button>
            </div>
          </div>
        </div>
    </form>
  )
}
