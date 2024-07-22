import './globals.css'
import type { Metadata } from 'next'
import { kenia, outfit } from './fonts'
import { Providers } from './providers'
// import NavbarComponent from '@/components/navbar/navbar-component'
import { AI } from './actions/AIProvider'
import Header from './chat/components/header'
import HeaderMobile from './chat/components/header-mobile'
import SideNav from '@/components/side-nav'
import PageWrapper from '@/components/page-wrapper'
import MarginWidthWrapper from '@/components/margin-with-wrapper'
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
            <div className='flex'>
              <SideNav />
            <main className='flex-1'>
              <MarginWidthWrapper>
                {/* <NavbarComponent /> */}
                <Header />
                <HeaderMobile />
                <PageWrapper>
                  {children}
                </PageWrapper>
              </MarginWidthWrapper>
            </main>

            </div>
          </Providers>
        </body>
      </html>
    </AI>
  )
}
