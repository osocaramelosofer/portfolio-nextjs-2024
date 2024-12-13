import ThemeToggle from '@/components/ui/theme-toogle'
import { Button } from '@nextui-org/react'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'
import { MdSimCardDownload } from 'react-icons/md'
import styles from '@/styles/avatar.module.css'

import { WeatherComponent } from '../weather-component'
import './hero.css'

import { TextScramble } from '../motion-primitives/core/text-scramble'
export function HeroSection() {
  return (
    <section className="mb-3">
      <div className="hero-grid">
        <div className="grid-area-about hero flex flex-col justify-between rounded-lg bg-foreground-100 p-4">
          <div className="flex items-center gap-x-2">
            <FaUser className="rounded-lg bg-black p-2 text-4xl text-white " />
            <span className="font-rubik">about me</span>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="image-container mb-4 mt-10 flex justify-center md:mt-0 md:justify-start">
              <div className={`${styles.heroImg} size-[150px] md:size-40`} />
            </div>
            <TextScramble
              className="font-bungee text-xl md:text-4xl lg:text-5xl"
              as="h2"
            >
              Full Stack Developer
            </TextScramble>
            <TextScramble className="font-geist text-lg md:text-3xl">
              Fernando Hernández
            </TextScramble>
            <div className="min-h-14">
              <TextScramble
                duration={1.5}
                className="text-pretty break-words font-geist text-sm md:text-lg"
                characterSet=". "
                as="p"
              >
                +5 years of experience building web applications
              </TextScramble>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="/files/resume.pdf"
                download="Fernando_Hernandez_Full_Stack_Developer.pdf"
              >
                <Button className="rounded-full bg-foreground-50">
                  <MdSimCardDownload />
                  Resume
                </Button>
              </a>
              <a
                href="https://github.com/osocaramelosofer/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="rounded-full bg-foreground-50">
                  <FaGithub />
                  Github
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/fernando-hern%C3%A1ndez-8b30421b2/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="rounded-full bg-foreground-50">
                  <FaLinkedin />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-area-location flex flex-col gap-y-10 rounded-lg bg-foreground-100 p-4 ">
          <div className="flex items-center gap-x-2 ">
            <IoIosColorPalette className="rounded-lg bg-black p-2 text-4xl text-white" />
            <span className="font-lexend text-lg font-semibold capitalize">
              theme
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-2">
            <span className="font-lexend">Choose a theme</span>
            <ThemeToggle />
          </div>
        </div>
        <div className="grid-area-theme rounded-lg bg-foreground-100 p-4">
          <WeatherComponent />
        </div>
      </div>
    </section>
  )
}
