
  // import Lottie from 'react-lottie'
import animationData from '@/lib/lotties/lottie-rock.json'
import styles from '@/styles/grid.module.css'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { signIn } from '@/lib/actions'

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  width: '100%'
}

export default async function AboutPage () {
  // const supabase = createClient()
  return (
    <header className={styles.gridContainer}>
      <div className={ styles.squareOne}></div>
      <div className={` ${styles.mainContent}`}>
        <div className='lottie-container max-w-full h-auto'>
          {/* <Lottie
            options={lottieOptions}
            height={200}
            width={200}
          /> */}
        </div>
        <form action={signIn}>
          <button>
            sign in
          </button>
        </form>
      </div>
      <div className={styles.squareTwo}></div>
    </header>
  )
}
