import React from 'react'

export default function ChatLayout ({ children }: { children: React.ReactNode }) {
  return (
    <section className='bg-orange-200'>
      {children}
    </section>
  )
}
