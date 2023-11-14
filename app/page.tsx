'use client'
import Lottie from 'react-lottie'
import animationData from '@/lib/lotties/lottie-rock.json'
import styles from '@/styles/grid.module.css'
import { kenia } from './fonts'

const lottieOptions = {
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
        <h1 className={`${kenia.className} text-4xl`}>osocaramelosofer</h1>
        <div className='lottie-container max-w-full h-auto'>
          <Lottie
            options={lottieOptions}
            height={200}
            width={200}
          />
        </div>
        <h2 className='font-outfit'>que es esto?</h2>
        <h3>osocaramelosofer</h3>
        <p>this is a paragraph !</p>
      </div>
    </header>
  )
}
