import styles from './footer.module.css'
export function FooterComponent() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.squareOne}></div>

      <div className={styles.mainContent}>
        <div className="">
          <h2 className="font-kenia">topics</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>
      </div>

      <div className={styles.squareTwo}></div>
    </footer>
  )
}
