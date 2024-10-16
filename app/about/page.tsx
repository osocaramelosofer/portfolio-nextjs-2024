'use client'

import Lottie from 'react-lottie'
import animationData from '@/lib/lotties/lottie-rock.json'
import styles from '@/styles/grid.module.css'

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  width: '100%'
}

export default function AboutPage() {
  return (
    <header className={styles.gridContainer}>
      <div className={styles.squareOne}></div>
      <div className={` ${styles.mainContent}`}>
        <div className="lottie-container max-w-full h-auto">
          <Lottie options={lottieOptions} height={200} width={200} />
        </div>
      </div>
      <div className={styles.squareTwo}></div>
    </header>
  )
}
