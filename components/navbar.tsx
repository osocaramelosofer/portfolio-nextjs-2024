'use client'
import { FaHome, FaReact } from 'react-icons/fa'
import { Wrapper } from './wrapper'
import Link from 'next/link'
import { useActivePath } from '@/hooks/useActivePath'

const NAVBAR_ITEMS = [
  { key: '', name: 'home', icon: <FaHome /> },
  { key: 'react', name: 'react', icon: <FaReact /> }
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
                className="size-full object-contain"
              />
            </div>
          </div>
          <ul className="flex gap-x-4 font-geist font-semibold capitalize">
            {NAVBAR_ITEMS.map(({ key, name, icon }) => {
              const isActive = useActivePath({
                currentPage: key,
                basePath: ''
              })
              return (
                <li
                  key={name}
                  className="rounded-full px-2 py-1 text-foreground-400 hover:cursor-pointer"
                >
                  <Link href={`/${key}`}>
                    <div
                      className={`${
                        isActive && 'text-foreground-900'
                      } text-md flex items-center gap-x-1 md:text-lg lg:text-xl`}
                    >
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
