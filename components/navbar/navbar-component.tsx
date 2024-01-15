import styles from './navbar.module.css'
export default function NavbarComponent () {
  return (
    <nav className={styles.navbarContainer}>
        <ul className='flex  gap-x-3 font-outfit text-lg font-bold'>

            <li className={styles.menuItem}>
                <a href="#">Home</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#about">About</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#projects">Projects</a>
            </li>
        </ul>
    </nav>
  )
}
