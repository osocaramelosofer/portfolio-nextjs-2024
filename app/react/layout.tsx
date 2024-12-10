import AsideMenu from './components/aside-menu'

interface LayoutProps {
  children: React.ReactNode
}

export default function ReactLayout({ children }: LayoutProps) {
  return (
    <div className="grid h-full grid-cols-react-layout overflow-y-hidden">
      <AsideMenu />
      <main>{children}</main>
    </div>
  )
}
