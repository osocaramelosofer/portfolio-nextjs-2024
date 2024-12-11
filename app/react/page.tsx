import { TextScrambleBasic } from '@/components/motion-primitives/text-scramble-basic'

export default function ReactPage() {
  return (
    <div className="px-2">
      <h1 className="">
        <TextScrambleBasic className="font-bungee text-sm font-semibold md:text-5xl">
          React Exercises
        </TextScrambleBasic>
      </h1>

      <article className="font-geist text-lg">
        <p>
          These are react helpful exercises I have found in my journey as a
          frontend developer.
        </p>
      </article>
    </div>
  )
}
