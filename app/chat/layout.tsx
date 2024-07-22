import React from 'react'
import Header from './components/header'
import HeaderMobile from './components/header-mobile'

export default function ChatLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-screen h-dvh'>
      {children}
    </main>
  )
}
