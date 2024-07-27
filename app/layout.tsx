import './globals.css'
import type { Metadata } from 'next'
import { kenia, outfit } from './fonts'
import { Providers } from './providers'
import { AI } from './actions/AIProvider'
import HeaderTwo from '@/components/header-two'
import SideNavTwo from '@/components/side-nav-two'
export const metadata: Metadata = {
  title: 'osocarameloso',
  description: 'Web developer'
}

export default async function RootLayout ({
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
            <HeaderTwo />
            <div className="flex">
              <SideNavTwo />
              <div className="w-full overflow-x-auto">
                <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                  <div className="h-full w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                    <div className="w-full md:max-w-6xl">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </AI>
  )
}
