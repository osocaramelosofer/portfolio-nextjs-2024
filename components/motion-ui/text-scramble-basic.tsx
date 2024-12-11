import { TextScramble } from '@/components/ui/text-scramble'

interface TextScrambleBasicProps {
  children: string
  className?: string
}

export function TextScrambleBasic({
  children,
  className = ''
}: TextScrambleBasicProps) {
  return (
    <TextScramble className={`font-mono uppercase ${className}`.trim()}>
      {children}
    </TextScramble>
  )
}
