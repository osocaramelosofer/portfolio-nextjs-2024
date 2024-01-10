import styles from '@/styles/grid.module.css'
import { outfit } from './fonts'
import { Dots } from '@/components/dots'
import { Stack } from '@/components/stack'

export default function Home () {
  return (
  <section className='hero h-auto py-20 relative'>
    <div className='container mx-auto px-12  w-full'>
      <div className='hero-content grid gap-y-4'>
        <div className='hero-main bg-yellow-400 flex flex-col-reverse  md:justify-center items-center md:flex-row'>
            <div className='hero-text flex flex-col gap-2 max-w-[800px] bg-red-500 relative'>
              <div className='flex w-full relative'>
                <h1 className=
                {`${outfit.className} ${styles.title}
                 text-zinc-700 text-4xl font-bold leading-tight my-8`}>
                  Front-End Developer</h1>
                <img
                  className='absolute  right-12 top-7 md:right-24 w-[50px] h-[50px]'
                  src='/images/waving.png'
                  alt="Picture of the author"
                />
              </div>
              <p>Hi, I'm Fernando Hernandez. A passionate Front-end Developer based in Tlaxcala, Mexico. 📍</p>
              <span className='flex gap-3'>
                <a href="" className='cursor-pointer'>github</a>
                <a href="" className='cursor-pointer'>linkedin</a>
              </span>
            </div>
            <figure className='hero-img rounded-full overflow-hidden max-w-[200px] max-h-[200px]'>
              <img
                className='object-cover'
                src="/images/me.jpg"
                alt="Picture of the author"
              />
            </figure>
        </div>
        <Stack />
      </div>
      <Dots />
    </div>
  </section>
  )
}
