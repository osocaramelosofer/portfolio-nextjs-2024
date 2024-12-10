import { FaHome, FaReact } from 'react-icons/fa'
import { Wrapper } from './wrapper'
import Link from 'next/link'
import { LiaLinkSolid } from 'react-icons/lia'

const NAVBAR_ITEMS = [
  { key: '', name: 'home', icon: <FaHome /> },
  { key: 'react', name: 'react', icon: <FaReact /> },
  { key: '', name: 'cool links', icon: <LiaLinkSolid /> }
]
export function Navbar() {
  return (
    <nav className="bg-foreground-100 py-2">
      <Wrapper>
        <div className=" flex items-center gap-x-4">
          <div>
            <div className="size-10">
              <img
                src="/images/valiente-logo.webp"
                alt="logo"
                className="size-full object-cover"
              />
            </div>
          </div>
          <ul className="flex gap-x-4 font-lexend font-normal capitalize">
            {NAVBAR_ITEMS.map(({ key, name, icon }) => {
              return (
                <li
                  key={name}
                  className="rounded-full px-2 py-1 hover:cursor-pointer hover:text-sky-500 "
                >
                  <Link href={`/${key}`}>
                    <div className="flex items-center gap-x-1 ">
                      {icon}
                      <span>{name}</span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </nav>
  )
}
