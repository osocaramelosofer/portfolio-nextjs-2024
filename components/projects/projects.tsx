'use client'

import React from 'react'
import { projectsData } from '@/lib/data/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks/useSectionView'
import Container from '../ui/container'
// import SectionHeading from './section-heading'

export default function Projects () {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      {/* <SectionHeading>My projects</SectionHeading> */}
      <h2 className='text-center'>My projects</h2>
      <Container>
        <div>
            {projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>
            ))}
        </div>
      </Container>
    </section>
  )
}
