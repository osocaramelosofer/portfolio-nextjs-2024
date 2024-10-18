import { Wrapper } from './wrapper'

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
            <li className="rounded-full px-2 py-1 hover:cursor-pointer  hover:bg-amber-400">
              home
            </li>
            <li className="rounded-full px-2 py-1 hover:cursor-pointer  hover:bg-amber-400">
              projects
            </li>
            <li className="rounded-full px-2 py-1 hover:cursor-pointer  hover:bg-amber-400">
              skills
            </li>
          </ul>
        </div>
      </Wrapper>
    </nav>
  )
}
