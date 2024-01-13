import styles from './styles.module.css'

export function AboutSection () {
  return (
        <section className='about py-20 bg-slate-100'>
            <div className='mx-auto max-w-[61rem]'>
                <div className="about-content grid items-center justify-center grid-cols-2">
                    <div className='img-side relative inline-block'>
                        <img src='/images/profile-picture.webp' alt="profile picture"
                        className='h-[21rem] w-[25rem] rounded-large' />
                    </div>
                    <div className='h-full'>
                        <h2 className={styles.aboutTitle}>About me</h2>
                        <h3>A creative Full-Stack Developer based in Tlaxcala, México📍</h3>
                        <p>As a Full-Stack Developer, I possess an impressive arsenal of skills in web development. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
