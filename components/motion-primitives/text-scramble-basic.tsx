import { TextScramble } from '@/components/motion-primitives/core/text-scramble'

interface TextScrambleBasicProps {
  children: string
  className?: string
}

export function TextScrambleBasic({
  children,
  className = ''
}: TextScrambleBasicProps) {
  return (
    <TextScramble className={`${className}`.trim()}>{children}</TextScramble>
  )
}
