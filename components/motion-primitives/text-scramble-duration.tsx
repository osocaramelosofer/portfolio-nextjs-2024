import { TextScramble } from '@/components/motion-primitives/core/text-scramble'

interface TextScrambleCustomCharacterDurationProps {
  children: string
  className?: string
  duration?: number
}
export function TextScrambleCustomCharacterDuration({
  children,
  className = 'font-mono text-sm',
  duration = 1.2
}: TextScrambleCustomCharacterDurationProps) {
  return (
    <TextScramble className={className} duration={duration} characterSet=". ">
      {children}
    </TextScramble>
  )
}
