export function Stack() {
  const icons = [
    {
      src: 'https://skillicons.dev/icons?i=html,css',
      alt: 'skill-icon'
    },
    {
      src: 'https://skillicons.dev/icons?i=js,ts',
      alt: 'skill-icon'
    },
    {
      src: 'https://skillicons.dev/icons?i=react,next',
      alt: 'skill-icon'
    },
    {
      src: 'https://skillicons.dev/icons?i=tailwind,sass',
      alt: 'skill-icon'
    },
    {
      src: 'https://skillicons.dev/icons?i=python,django',
      alt: 'skill-icon'
    },
    {
      src: 'https://skillicons.dev/icons?i=docker,c#',
      alt: 'skill-icon'
    }
  ]
  return (
    <div className="stack static bottom-0 flex flex-col items-center text-lg md:left-80 lg:flex-row ">
      <p className="mb-5 border-b-2 border-stone-700/60 font-semibold md:mb-0 md:mr-12 md:border-b-0 md:border-r-2 md:pr-4 ">
        Tech Stack
      </p>
      <div className="logos">
        <ul className="flex list-none flex-wrap justify-center gap-7 md:justify-start ">
          {icons.map((icon) => (
            <li
              className="cursor-pointer transition-all duration-1000 hover:-translate-y-3"
              key={icon.src}
            >
              <img className="h-12 w-24" src={icon.src} alt="skill-icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
