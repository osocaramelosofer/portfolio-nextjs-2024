export interface SideNavItem {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
  position?: string
}

export interface MenuItemWithSubMenuProps {
  item: SideNavItem
  toggleOpen: () => void
}
