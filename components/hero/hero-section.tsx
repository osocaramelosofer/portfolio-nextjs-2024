import { outfit } from '../../app/fonts'
import { Stack } from '@/components/hero/stack'
import Container from './../ui/container'
import styles from './styles.module.css'
import { Dots } from '@/components/ui/dots'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero relative flex h-auto w-full flex-col
  py-16 pt-24  md:h-screen md:py-0 lg:pt-0"
    >
      <Container>
        <div
          className="content relative mt-2 flex h-auto flex-col items-center
      justify-center gap-y-4 text-center md:mt-28 md:h-[40.6rem] md:text-left"
        >
          <div className="hero-main tex-align md:tex-left relative flex flex-col-reverse items-center gap-x-12 sm:h-auto md:flex-row md:justify-center md:gap-x-40">
            <div className="hero-text relative flex max-w-[400px] flex-col gap-2">
              <div className="relative flex w-full">
                <h1
                  className={`${outfit.className} ${styles.title}
                 my-8 text-4xl font-bold leading-tight text-zinc-700 md:text-6xl`}
                >
                  Full-Stack Developer
                </h1>
                <img
                  className="absolute -right-3 top-16
                  size-[50px] md:right-8
                   md:top-0 lg:right-8
                   lg:top-6"
                  src="/images/waving.webp"
                  alt="Picture of the author"
                />
              </div>
              <p className={cn('text-medium md:text-lg', outfit.className)}>
                Hi, I&apos;m Fernando Hernandez. A passionate Full-Stack
                Developer based in Mexico city. 📍
              </p>
              <span className="my-10 flex justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/osocaramelosofer"
                  className="cursor-pointer text-5xl hover:text-cyan-400"
                  aria-label="linkedin"
                >
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
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/fernando-hernández-8b30421b2/"
                  className="cursor-pointer text-5xl hover:text-cyan-500"
                  aria-label="github"
                >
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
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className={`${styles.heroImg}`} />
          </div>
          <Stack />
        </div>
      </Container>
      <Dots />
    </section>
  )
}
