'use client'

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
    <aside className="mr-5 bg-foreground-100">
      <ul className="flex flex-col">
        {EXERCISES.map(({ key, name }) => (
          <li key={key}>
            <Link href={`/react/guides/${key}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
