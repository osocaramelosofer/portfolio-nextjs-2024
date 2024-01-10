'use client'
import Lottie from 'react-lottie'
import animationData from '@/lib/lotties/lottie-rock.json'
import styles from '@/styles/grid.module.css'
import { kenia } from '@/app/fonts'
import NavbarComponent from '@/components/navbar/navbar-component'
import Image from 'next/image'

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  width: '100%'
}

export default function AboutPage () {
  return (
    <header className={styles.gridContainer}>
       <div className={ styles.squareOne}></div>
       <NavbarComponent/>

       <h1 className={`${kenia.className} text-4xl ${styles.title}`}>osocaramelosofer</h1>
        <div className='rounded-full overflow-hidden w-[200px] h-[200px]'>
          <Image
            src="/images/me.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      <div className={` ${styles.mainContent}`}>
        <div className='lottie-container max-w-full h-auto'>
          <Lottie
            options={lottieOptions}
            height={200}
            width={200}
          />
        </div>
        <h2 className='font-outfit'>who am I?</h2>
        <p>
          Hello, I'm softwer developer with 5 years of experience.
          I have worked at the backend and frontend with many technologies and stacks.

          I consider myself a creative person which makes me feel more comfortable at the frontend.

        </p>

        <div>
          <a href="" className='bg-blue-500 rounded-xl px-2'>linkedIn</a>
          <a href="" className='bg-blue-500 rounded-xl px-2'>Github</a>
        </div>
      </div>

      <div className={styles.squareTwo}></div>
    </header>
  )
}
