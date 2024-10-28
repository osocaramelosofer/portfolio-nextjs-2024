'use client'
import { ProjectComponent } from '@/components/project-component'
import { HeroSection } from '@/components/sections/hero-section'
import { FaMagic } from 'react-icons/fa'
import '@/styles/projects.css'

// TODOS:
// ADD A SHORTCUT BAR LIKE MIDUDEV WHEN HE MADE HIS REUSME
// NAV BAR
// ADD BIG FOOT AND YETY TO THE HERO
// CONFIGURE THE COLOR PALETTE
// CHANGE PICTURE IMAGE
export default function Home() {
  const icons = [
    {
      src: 'https://skillicons.dev/icons?i=html',
      alt: 'html'
    },
    {
      src: 'https://skillicons.dev/icons?i=css',
      alt: 'css'
    },
    {
      src: 'https://skillicons.dev/icons?i=vue',
      alt: 'vue'
    },
    {
      src: 'https://skillicons.dev/icons?i=ts',
      alt: 'typescript'
    },
    {
      src: 'https://skillicons.dev/icons?i=react',
      alt: 'react'
    },
    {
      src: 'https://skillicons.dev/icons?i=next',
      alt: 'next'
    },
    {
      src: 'https://skillicons.dev/icons?i=tailwind',
      alt: 'tailwind'
    },
    {
      src: 'https://skillicons.dev/icons?i=sass',
      alt: 'sass'
    },
    {
      src: 'https://skillicons.dev/icons?i=python',
      alt: 'python'
    },
    {
      src: 'https://skillicons.dev/icons?i=django',
      alt: 'django'
    },
    {
      src: 'https://skillicons.dev/icons?i=docker',
      alt: 'docker'
    },
    {
      src: 'https://skillicons.dev/icons?i=c#',
      alt: 'c#'
    },
    {
      src: 'https://skillicons.dev/icons?i=js',
      alt: 'javascript'
    }
  ]
  return (
    <main className="">
      <HeroSection />
      <section className="mt-10">
        <div className="project-grid">
          <ProjectComponent
            imageName="ferleth_home.webp"
            project="Ferleth Landing Page"
            description="Landing page for clothes and fabric stuff made with nextjs "
            linkSite="https://ferleth-landing-page.vercel.app/"
          />
          <ProjectComponent
            imageName="babelon-home.webp"
            project="Babelon"
            description="Web application with AI integrated that suggests places to visit"
            linkSite="https://babelontrip.com/"
          />
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-col items-start gap-x-10 gap-y-5 rounded-xl border-1 border-foreground-300 p-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaMagic className="rounded-lg bg-black p-1 text-3xl text-white" />
              <span className="font-lexed text-3xl capitalize">skills</span>
            </div>
            <div className="max-w-[220px] text-wrap ">
              <span className="font-lexend text-4xl">
                I have all these powers
              </span>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {icons.map(({ src, alt }) => {
              return (
                <li key={src}>
                  <img src={src} alt={alt} className="lg:size-14" />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {/* <section className="my-20">
        <div className=" flex items-center gap-x-2 text-3xl font-bold">
          <h3>Work in progress ...</h3>
          <GrTools size={40} className="rounded-lg bg-black p-1 text-white" />
        </div>
      </section> */}
    </main>
  )
}
