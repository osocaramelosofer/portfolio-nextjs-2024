import './globals.css'
import type { Metadata } from 'next'
import { kenia, outfit } from './fonts'
import { Providers } from './providers'
import NavbarComponent from '@/components/navbar/navbar-component'
import { AI } from './actions/AIProvider'
export const metadata: Metadata = {
  title: 'osocarameloso',
  description: 'Web developer'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AI>
      <html lang="en" className={`${outfit.variable} ${kenia.variable}`}>
        <head>
          <meta name='view-transition' content='same-origin'/>
        </head>
        <body className=''>
          <Providers>
            <NavbarComponent />
            {children}
          </Providers>
        </body>
      </html>
    </AI>
  )
}
