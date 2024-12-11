import { TextScramble } from '@/components/motion-primitives/core/text-scramble'

interface TextScrambleCustomCharacterDurationProps {
  children: string
  className?: string
}
export function TextScrambleCustomCharacterDuration({
  children,
  className = 'font-mono text-sm'
}: TextScrambleCustomCharacterDurationProps) {
  return (
    <TextScramble className={className} duration={1.2} characterSet=". ">
      {children}
    </TextScramble>
  )
}
