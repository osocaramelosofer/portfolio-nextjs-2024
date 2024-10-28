import { BsArrowRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { RiCodeSSlashFill } from 'react-icons/ri'

interface ProjectComponentProps {
  imageName: string
  project: string
  description: string
  linkSite: string
}
export function ProjectComponent({
  imageName,
  project,
  description,
  linkSite
}: ProjectComponentProps) {
  return (
    <div className="flex flex-col rounded-lg border-1 border-foreground-300 bg-foreground-100 pl-4 pt-4">
      <div className="flex items-center gap-4">
        <RiCodeSSlashFill className="rounded-lg  bg-black p-1 text-3xl font-bold text-white" />
        <span className="font-lexend">Project</span>
      </div>
      <div className="mb-5 mt-10 flex flex-col gap-2">
        <span className="font-lexend text-3xl font-bold">{project}</span>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2">
          <li className="rounded-full bg-foreground px-2 py-1 font-normal text-foreground-50">
            Javascript
          </li>
          <li className="rounded-full bg-foreground-800 px-2 py-1 text-foreground-50">
            Nextjs
          </li>
          <li className="rounded-full bg-foreground-800 px-2 py-1 text-foreground-50">
            HTML
          </li>
          <li className="rounded-full bg-foreground-800 px-2 py-1 text-foreground-50">
            CSS
          </li>
          <li className="rounded-full bg-foreground-800 px-2 py-1 text-foreground-50">
            Tailwind
          </li>
        </ul>
        <div className="mr-5 flex  items-center justify-end gap-2 font-semibold">
          <FaGithub />
          <span>Github</span>
          <BsArrowRight />
        </div>
      </div>

      <div className="max-w-[500px] overflow-hidden">
        <a
          href={linkSite}
          className="hover:cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-ful w-full overflow-hidden rounded-br-xl rounded-tl-xl object-cover"
            src={`/images/${imageName}`}
            alt="ferleth page"
          />
        </a>
      </div>
    </div>
  )
}
