'use client'

import React from 'react'
import { projectsData } from '@/lib/data/data'
import Project from './project'
// import Container from '../ui/container'
// import { useSectionInView } from '@/lib/hooks/useSectionView'
// import SectionHeading from './section-heading'

export default function Projects () {
  // const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section id="projects" className="mx-auto w-full grid justify-center px-16 pb-20">
      {/* <SectionHeading>My projects</SectionHeading> */}
      <h2 className='text-center font-semibold text-3xl mb-5'>My Projects</h2>

      {projectsData.map((project, index) => (
          <Project key={index} {...project} />
      ))}

    </section>
  )
}
