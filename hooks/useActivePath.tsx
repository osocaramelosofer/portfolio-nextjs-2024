import { usePathname } from 'next/navigation'

const BASE_PATH = '/react/guides'

export const useActivePath = (currentPage: string): boolean => {
  const pathname = usePathname()
  const expectedPath = `${BASE_PATH}/${currentPage}`

  return pathname === expectedPath
}
