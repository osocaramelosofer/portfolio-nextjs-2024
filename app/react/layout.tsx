import AsideMenu from './components/aside-menu'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-react-layout">
      <AsideMenu />
      <main>{children}</main>
    </div>
  )
}
