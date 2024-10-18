'use client'

import ThemeToggle from '@/components/ui/theme-toogle'
import { Button } from '@nextui-org/react'
import { FaGithub, FaLinkedin, FaUserAstronaut } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdSimCardDownload } from 'react-icons/md'
import styles from '../components/hero/styles.module.css'
import { GrTools } from 'react-icons/gr'
// TODOS:
// ADD A SHORTCUT BAR LIKE MIDUDEV WHEN HE MADE HIS REUSME
// NAV BAR
// ADD BIG FOOT AND YETY TO THE HERO
// CONFIGURE THE COLOR PALETTE
// CHANGE PICTURE IMAGE
export default function Home() {
  return (
    <main>
      <section className="">
        <div className="py-4 w-max h-max flex flex-col md:flex-row gap-4 mx-auto  text-foreground  rounded-lg items-stretch">
          <div className="hero rounded-lg p-4 bg-foreground-200 flex flex-col justify-between items-">
            <div className="flex gap-x-2 items-center">
              <FaUserAstronaut className="text-4xl bg-black text-white p-2 rounded-lg " />
              <span className="font-rubik">about me</span>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="image-container flex justify-center mt-10 md:mt-0 md:justify-start mb-4">
                <div
                  className={`${styles.heroImg} w-[150px] h-[150px] md:w-[10rem] md:h-[10rem]`}
                />
              </div>
              <h2 className="font-rubik text-lg md:text-2xl">
                Fernando Hernandez
              </h2>
              <div className="w-[270px] md:w-max">
                <p className="font-lexend break-words text-pretty text-sm md:text-lg">
                  Fullstack developer with +5 years of experience building web
                  applications
                </p>
              </div>
              <div className="flex gap-x-2">
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

          <div className="contenedor-2 overflow-hidden flex flex-col gap-4 h-full  ">
            <div className="rounded-lg bg-foreground-200 flex flex-col gap-y-10 p-4 ">
              <div className="flex gap-x-2 items-center ">
                <IoIosColorPalette className="text-4xl bg-black text-white p-2 rounded-lg" />
                <span className="font-lexend capitalize text-lg font-semibold">
                  theme
                </span>
              </div>

              <div className="flex flex-col justify-center items-center gap-y-2">
                <span className="font-lexend">Choose a theme</span>
                <ThemeToggle />
              </div>
            </div>
            <div className="rounded-lg bg-foreground-200 p-4">
              <div className="flex items-center gap-x-2">
                <IoLocationSharp className="text-4xl  bg-black text-white p-2 rounded-lg" />
                <span className="font-lexed text-lg font-semibold">
                  My Location Weather
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="font-lexed text-6xl font-semibold">45</span>
                <span>Tlaxcala Mexico</span>
                <div className="flex bg-white rounded-full text-black px-4 py-1 gap-x-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="">52</span>
                    <span>feels like</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span>6 mph</span>
                    <span>wind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10">
        <div className="flex items-center gap-x-2 font-bold text-3xl mx-auto w-max">
          <h3>Work in progress ...</h3>
          <GrTools size={40} className="bg-black text-white rounded-lg p-1" />
        </div>
      </section>
    </main>
  )
}
