import { Inter, Kenia, Outfit } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const kenia = Kenia({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kenia'
})

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
})
