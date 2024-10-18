export function Dots() {
  return (
    <>
      <div
        className="absolute left-0 top-0 -z-10 size-[12.25rem]
      rounded-full bg-custom-gradient blur-[5rem]
      dark:blur-[6rem] sm:size-40 "
      />
      <div
        className="absolute left-0 top-80 -z-10 size-[12.25rem]
      rounded-full bg-reverse-custom-gradient blur-[5rem]
      dark:blur-[6rem] sm:size-40 "
      />
      <div
        className="absolute right-0 top-0 -z-10 size-[12.25rem]
      rounded-full bg-custom-gradient blur-[5.5rem]
      dark:blur-[6rem] sm:size-[14.75rem] "
      />

      <div
        className="absolute -left-8 top-[28rem] -z-10
       size-32 rounded-full
       bg-[#F5E3FD] blur-[5rem]
       dark:bg-[#CBD7FF] dark:blur-[7rem]
       sm:size-[16.75rem]"
      />

      <div
        className="absolute -left-32 top-[60rem] -z-10 size-[10.25rem] rounded-full bg-gradient-to-r
      from-sky-500 to-indigo-500 blur-[7rem]
      dark:bg-[#fdfde3] dark:blur-[6rem] sm:size-[12.75rem]"
      />
    </>
  )
}
