'use client'

import React from 'react'
import { projectsData } from '@/lib/data/data'
import Project from './project'
// import Container from '../ui/container'
// import { useSectionInView } from '@/lib/hooks/useSectionView'
// import SectionHeading from './section-heading'

export default function Projects() {
  // const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section
      id="projects"
      className="mx-auto mt-28 grid w-full justify-center px-16 pb-20"
    >
      {/* <SectionHeading>My projects</SectionHeading> */}
      <h2 className="mb-5 text-center text-3xl font-semibold">My Projects</h2>

      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  )
}
