'use client'
import Lottie from 'react-lottie'
import animationData from '@/lib/lotties/lottie-rock.json'
import styles from '@/styles/grid.module.css'
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  width: '100%'
}

export default function Home () {
  return (
    <header className={styles.gridContainer}>
      <div className={ styles.squareOne}></div>
      <div className={styles.squareTwo}></div>

      <div className={` ${styles.mainContent}`}>
        <h1>hola</h1>
        <div className='lottie-container max-w-full h-auto'>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </div>
        <h2>que es esto?</h2>
      </div>
    </header>
  )
}
