import './globals.css'
import type { Metadata } from 'next'
import { kenia, outfit } from './fonts'
import { FooterComponent } from '@/components/footer/footer-component'
import { Providers } from './providers'
import NavbarComponent from '@/components/navbar/navbar-component'

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
    <html lang="en" className={`${outfit.variable} ${kenia.variable}`}>
      <head>
        <meta name='view-transition' content='same-origin'/>
      </head>
      <body >
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
        {/* <FooterComponent /> */}
      </body>
    </html>
  )
}
