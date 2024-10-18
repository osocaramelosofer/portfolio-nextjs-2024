import styles from './styles.module.css'

export function AboutSection() {
  return (
    <section className="about bg-slate-100 py-20" id="about">
      <div className="mx-auto max-w-[61rem]">
        <div
          className="about-content grid grid-cols-1 items-center
                 justify-center gap-y-10 px-10 md:grid-cols-2"
        >
          <div className="img-side mx-auto">
            <img
              src="/images/profile-picture.webp"
              alt="profile picture"
              className="size-[250px] rounded-large"
            />
          </div>
          <div className="mx-auto h-full max-w-[525px] text-center md:text-left">
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
