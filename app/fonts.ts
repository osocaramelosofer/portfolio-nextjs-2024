import {
  Inter,
  Kenia,
  Outfit,
  Rubik_Mono_One,
  Lexend,
  Bungee_Spice
} from 'next/font/google'

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
export const bungeeSpice = Bungee_Spice({
  subsets: ['latin'],
  display: 'auto',
  weight: '400',
  variable: '--font-bungee'
})
export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lexend'
})

export const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rubik'
})
