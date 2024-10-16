import styles from './styles.module.css'

export function AboutSection() {
  return (
    <section className="about py-20 bg-slate-100" id="about">
      <div className="mx-auto max-w-[61rem]">
        <div
          className="about-content grid items-center justify-center
                 grid-cols-1 md:grid-cols-2 gap-y-10 px-10"
        >
          <div className="img-side mx-auto">
            <img
              src="/images/profile-picture.webp"
              alt="profile picture"
              className="h-[250px] w-[250px] rounded-large"
            />
          </div>
          <div className="h-full mx-auto text-center md:text-left max-w-[525px]">
            <h2 className={styles.aboutTitle}>About me</h2>
            <h3 className={styles.description}>
              A creative Full-Stack Developer based in México city📍
            </h3>
            <p className={styles.pTag}>
              I am currently working with Next js + other front end technologies
              and django/node for the backend.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
