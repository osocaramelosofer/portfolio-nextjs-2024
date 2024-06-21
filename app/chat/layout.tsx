import React from 'react'

export default function ChatLayout ({ children }: { children: React.ReactNode }) {
  return (
    <section className='bg-orange-200 w-full h-full'>
      {children}
    </section>
  )
}
