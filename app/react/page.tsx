import { TextScramble } from '@/components/motion-primitives/core/text-scramble'

export default function ReactPage() {
  return (
    <div className="px-2">
      <TextScramble
        className="font-bungee text-sm font-semibold md:text-5xl"
        as="h1"
      >
        React Exercises
      </TextScramble>

      <article className="font-geist text-lg">
        <TextScramble className="font-geist" duration={1.2} characterSet=". ">
          These are react helpful exercises I have found in my journey as a
          frontend developer.
        </TextScramble>
      </article>
    </div>
  )
}
