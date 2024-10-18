'use client'
import { HeroSection } from '@/components/sections/hero-section'
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
      <HeroSection />

      <section className="mt-10 w-full">
        <div className="mx-auto flex w-max items-center gap-x-2 text-3xl font-bold">
          <h3>Work in progress ...</h3>
          <GrTools size={40} className="rounded-lg bg-black p-1 text-white" />
        </div>
      </section>
    </main>
  )
}
