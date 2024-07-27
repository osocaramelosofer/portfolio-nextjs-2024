import Image from 'next/image';

export function Stack() {
  const icons = [
    {
      src: 'https://skillicons.dev/icons?i=html,css',
      alt: 'skill-icon',
    },
    {
      src: 'https://skillicons.dev/icons?i=js,ts',
      alt: 'skill-icon',
    },
    {
      src: 'https://skillicons.dev/icons?i=react,next',
      alt: 'skill-icon',
    },
    {
      src: 'https://skillicons.dev/icons?i=tailwind,sass',
      alt: 'skill-icon',
    },
    {
      src: 'https://skillicons.dev/icons?i=python,django',
      alt: 'skill-icon',
    },
    {
      src: 'https://skillicons.dev/icons?i=docker,c#',
      alt: 'skill-icon',
    },
  ];
  return (
    <div className="stack items-center bottom-0 flex flex-col static text-lg lg:flex-row md:left-80 ">
      <p className="font-semibold mb-5 md:mb-0 border-b-2 md:border-b-0 md:border-r-2 border-stone-700/60 md:mr-12 md:pr-4 ">
        Tech Stack
      </p>
      <div className="logos">
        <ul className="list-none flex flex-wrap justify-center md:justify-start gap-7 ">
          {icons.map((icon) => (
            <li
              className="cursor-pointer hover:-translate-y-3 transition-all duration-1000"
              key={icon.src}
            >
              <img className="w-24 h-12" src={icon.src} alt="skill-icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
