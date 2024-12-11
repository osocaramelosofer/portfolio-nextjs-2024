import './globals.css'
import type { Metadata } from 'next'
import {
  kenia,
  outfit,
  rubik,
  bungeeSpice,
  lexend,
  nabla,
  geistMono
} from './fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'osocarameloso',
  description: 'Web developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark 
        ${outfit.variable} ${kenia.variable} ${rubik.variable}
        ${lexend.variable} ${bungeeSpice.variable} ${nabla.variable}
        ${geistMono.variable}`}
    >
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className="h-full">
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
