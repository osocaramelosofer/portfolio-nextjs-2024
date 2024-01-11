import styles from '@/styles/grid.module.css'
import { outfit } from '../../app/fonts'
import { Stack } from '@/components/hero/stack'
import { Dots } from '@/components/ui/dots'
import Container from './../ui/container'

export default function HeroSection () {
  return (
  <section className='hero h-auto py-20 relative'>
    <Container>
      <div className='hero-content grid gap-y-4 '>
        <div className='hero-main text-center md:text-left flex flex-col-reverse  items-center md:justify-center md:flex-row md:gap-x-14'>
            <div className='hero-text flex flex-col gap-2 relative md:max-w-3xl'>
              <div className='flex w-full relative'>
                <h1 className=
                {`${outfit.className} ${styles.title}
                 text-zinc-700 text-4xl font-bold  leading-tight my-8`}>
                  Front-End Developer</h1>
                <img
                  className=' w-[50px] h-[50px] absolute right-12 top-6 md:top-6 md:right-8'
                  src='/images/waving.png'
                  alt="Picture of the author"
                />
              </div>
              <p className={`${outfit.className}`}>Hi, I'm Fernando Hernandez. A passionate Front-end Developer based in Tlaxcala, Mexico. 📍</p>
              <span className='flex gap-3 '>
                <a href="https://github.com/osocaramelosofer" className='cursor-pointer hover:text-sky-500'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/fernando-hernández-8b30421b2/" className='cursor-pointer hover:text-sky-500'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                </a>
              </span>
            </div>
            <figure className='hero-img rounded-full overflow-hidden max-w-[200px] max-h-[200px]'>
              <img
                className='object-cover'
                src="/images/me.jpg"
                alt="Picture of the author"
              />
            </figure>
        </div>
        <Stack />
      </div>
    </Container>
    <Dots />
  </section>
  )
}
