import { TextScrambleBasic } from '@/components/motion-primitives/text-scramble-basic'
import { TextScrambleCustomCharacterDuration } from '@/components/motion-primitives/text-scramble-duration'

export default function ReactPage() {
  return (
    <div className="px-2">
      <h1 className="">
        <TextScrambleBasic className="font-bungee text-sm font-semibold md:text-5xl">
          React Exercises
        </TextScrambleBasic>
      </h1>

      <article className="font-geist text-lg">
        <TextScrambleCustomCharacterDuration className="font-geist">
          These are react helpful exercises I have found in my journey as a
          frontend developer.
        </TextScrambleCustomCharacterDuration>
      </article>
    </div>
  )
}
