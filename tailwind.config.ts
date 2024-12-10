/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kenia: ['var(--font-kenia)'],
        outfit: ['var(--font-outfit)'],
        rubik: ['var(--font-rubik)'],
        lexend: ['var(--font-lexend)']
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(15,3,221,.3) 0%, rgba(77,77,255,.3) 35%, rgba(0,212,255,.3) 100%)',
        'reverse-custom-gradient':
          'linear-gradient(0deg, rgba(15,3,221,.3) 0%, rgba(77,77,255,.3) 35%, rgba(0,212,255,.3) 100%)'
      },
      gridTemplateColumns: {
        'react-layout': '.17fr .8fr'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
export default config
