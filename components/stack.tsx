export function Stack () {
  return (
    <div className="stack flex flex-col md:flex-row items-center bottom-0">
        <p className="font-semibold mb-5 md:mb-0 border-b-2 md:border-b-0 md:border-r-2 border-stone-700/60 md:mr-12 md:pr-4 ">
            Tech Stack
        </p>
        <div className="logos">
            <ul className="list-none flex justify-center gap-7">
                <li>
                    <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" />
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" />
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon" />
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=tailwind,sass" alt="skill-icon" />
                </li>
            </ul>
        </div>
    </div>
  )
}
