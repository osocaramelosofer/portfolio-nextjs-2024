// import { useActiveSectionContext } from '@/context/active-section-context'
// import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '../types/sectionName'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref } = useInView({
    threshold
  })
  //   const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  //   useEffect(() => {
  //     if (inView && Date.now() - timeOfLastClick > 1000) {
  //       setActiveSection(sectionName)
  //     }
  //   }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref
  }
}
