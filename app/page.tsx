'use client'

import ThemeToggle from '@/components/ui/theme-toogle'
import { Button } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdSimCardDownload } from 'react-icons/md'
import styles from '../components/hero/styles.module.css'

export default function Home() {
  return (
    <main>
      <section className="">
        <div className="w-max h-max flex gap-4 mx-auto text-foreground  rounded-lg">
          <div className="hero rounded-lg p-4 bg-foreground-200">
            <div>
              <span className="font-rubik">about me</span>
            </div>
            <div className="image-container flex justify-start">
              <div className={`${styles.heroImg}`} />
            </div>

            <div>
              <h2 className="font-rubik text-2xl">Fernando Hernandez</h2>
              <p className="font-lexend">
                Fullstack developer with +5 years of experience building web
                applications
              </p>
              <Button className="rounded-full">
                <MdSimCardDownload />
                Resume
              </Button>
              <Button className="rounded-full">
                <FaGithub />
                Github
              </Button>
            </div>
          </div>
          <div className="contenedor-2 h-full overflow-hidden flex flex-col gap-4">
            <div className="rounded-lg bg-foreground-200">
              <div className="flex gap-x-2 items-center">
                <IoIosColorPalette />
                <span>theme</span>
              </div>
              <div className="flex flex-col">
                <span>choose a theme</span>

                <ThemeToggle />
              </div>
            </div>
            <div className="rounded-lg bg-foreground-200">
              <div className="flex items-center">
                <IoLocationSharp />
                <span>My location Weather</span>
              </div>
              <span>45</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
