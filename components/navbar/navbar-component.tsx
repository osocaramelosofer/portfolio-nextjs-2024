import Link from 'next/link'
import styles from './navbar.module.css'
export default function NavbarComponent () {
  return (
    <nav className={styles.navbarContainer}>
        <ul className='flex flex-row justify-center w-full gap-x-3 font-outfit text-lg font-bold'>
          <LinkItem name='Home' path='/'/>
          <LinkItem name='About' path='/#about' />
          <LinkItem name='Chat' path='/chat' />
        </ul>
    </nav>
  )
}
function LinkItem ({ name, path }: { name: string, path: string }) {
  return (
    <Link
    className={styles.menuItem}
    href={path}>
      {name}
  </Link>
  )
}
