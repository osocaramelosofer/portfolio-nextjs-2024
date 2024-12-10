import './globals.css'
import type { Metadata } from 'next'
import { kenia, outfit } from './fonts'
import { Providers } from './providers'
import { Rubik_Mono_One, Lexend } from 'next/font/google'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'osocarameloso',
  description: 'Web developer'
}
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lexend'
})

const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rubik'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${kenia.variable} ${rubik.variable} ${lexend.variable}`}
    >
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
