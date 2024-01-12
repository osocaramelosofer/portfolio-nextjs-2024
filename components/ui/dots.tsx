export function Dots () {
  return (
    <>
      <div
      className="bg-custom-gradient absolute rounded-full blur-[3rem] dark:blur-[6rem]
      top-[0rem] -z-10 left-[0rem]
      h-[12.25rem] w-[12.25rem] sm:w-[10rem] sm:h-[10rem] "
      />
      <div
      className="bg-reverse-custom-gradient absolute rounded-full blur-[3rem] dark:blur-[6rem]
      top-[20rem] -z-10 left-[0rem]
      h-[12.25rem] w-[12.25rem] sm:w-[10rem] sm:h-[10rem] "
      />
      <div
      className="bg-custom-gradient absolute rounded-full blur-[3.5rem] dark:blur-[6rem]
      top-[0rem] -z-10 right-[0rem]
      h-[12.25rem] w-[12.25rem] sm:w-[14.75rem] sm:h-[14.75rem] "
      />

      {/* <div
      className="bg-[#CBD7FF] absolute rounded-full blur-[3rem] dark:blur-[6rem]
      top-[21rem] -z-10 -left-[1rem]
      h-[10.25rem] w-[10.25rem] sm:w-[12rem] sm:h-[12rem] dark:bg-[#fdfde3]"
      /> */}
      <div className="bg-[#F5E3FD] absolute -z-10 rounded-full
       h-[8rem] w-[8rem]
       top-[28rem] -left-[2rem]
       sm:w-[16.75rem] sm:h-[16.75rem]
       blur-[4rem] dark:blur-[7rem] dark:bg-[#CBD7FF]"
      />

      {/* <div
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute rounded-full -z-10 dark:blur-[6rem]
      top-[40rem] -right-[8rem] blur-[8rem]
      h-[10.25rem] w-[10.25rem] sm:w-[8rem] sm:h-[8rem] dark:bg-[#fdfde3]"
      /> */}
      <div
      className="bg-gradient-to-r from-sky-500 to-indigo-500 absolute rounded-full -z-10 dark:blur-[6rem]
      top-[60rem] -left-[8rem] blur-[7rem]
      h-[10.25rem] w-[10.25rem] sm:w-[12.75rem] sm:h-[12.75rem] dark:bg-[#fdfde3]"
      />
    </>
  )
}
