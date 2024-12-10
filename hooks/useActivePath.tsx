import { usePathname } from 'next/navigation'

interface UseActivePathProps {
  currentPage: string
  basePath: string
}
export const useActivePath = ({
  currentPage,
  basePath
}: UseActivePathProps): boolean => {
  const pathname = usePathname()
  const expectedPath = `${basePath}/${currentPage}`
  return pathname === expectedPath
}
