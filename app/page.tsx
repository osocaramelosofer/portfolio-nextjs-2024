'use client'
import { ProjectComponent } from '@/components/project-component'
import { HeroSection } from '@/components/sections/hero-section'
import { FaMagic } from 'react-icons/fa'
import '@/styles/projects.css'

// TODOS:
// WORK ON A RESPONSIVE NAV BAR(CHECK SHADCDN OR NEXTUI NAVBAR COMPONENT)
// WORK ON REACT GUIDES' ASIDE MENU (CHECK SHADCDN NAVBAR COMPONENT)
// ADD some images to improve the look and feel of the hero
// CHANGE PICTURE IMAGE
// Add a Tooltip to each logo skills or group the skills to reduce the calls of the logos
// ADD SOME MIDUDEV PROJECTS https://www.javascript100.dev/ (COOL BE COULD ADD AN CHAT AI TO YOUR PORTFOLIO WHERE ANSWERS QUESTIONS ABOUT YOU)
// ADD SOME PROJECTS WITH AI OR DATA SCIENCE OR LLM
// ADD A SHORTCUT BAR LIKE MIDUDEV WHEN HE MADE HIS REUSME
// Add a spotlight to home page https://motion-primitives.com/docs/spotlight
// Add a border trail to each square of home page https://motion-primitives.com/docs/border-trail
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
    },
    {
      src: 'https://skillicons.dev/icons?i=aws',
      alt: 'aws'
    },
    {
      src: 'https://skillicons.dev/icons?i=vercel',
      alt: 'vercel'
    }
  ]
  return (
    <main className="px-3">
      <HeroSection />
      <section className="mb-3">
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
      <section className="">
        <div className="skills-grid rounded-lg bg-foreground-100 p-4">
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
    </main>
  )
}
