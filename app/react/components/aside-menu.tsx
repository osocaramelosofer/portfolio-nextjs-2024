'use client'

import { useActivePath } from '@/hooks/useActivePath'
import Link from 'next/link'

interface MenuItem {
  key: string
  name: string
}
const EXERCISES: MenuItem[] = [
  { key: 'uncontrolled-form', name: 'uncontrolled form' },
  { key: 'controlled-form', name: 'controlled form' },
  { key: 'haiku', name: 'haiku' }
]

export default function AsideMenu() {
  return (
    <aside className="h-full bg-foreground-50 ">
      <ul className="flex flex-col px-2">
        {EXERCISES.map(({ key, name }, idx) => {
          const isActive = useActivePath({
            currentPage: key,
            basePath: '/react/guides'
          })
          return (
            <li
              key={key}
              className={`${isActive ? 'text-sky-400' : ''} text-lg`}
            >
              <Link href={`/react/guides/${key}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}