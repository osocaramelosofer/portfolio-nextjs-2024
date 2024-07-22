export interface SideNavItem {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export interface MenuItemWithSubMenuProps {
  item: SideNavItem
  toggleOpen: () => void
}
