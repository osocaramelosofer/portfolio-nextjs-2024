import { Icon } from '@iconify/react'
import { GoHomeFill } from "react-icons/go";
import { type SideNavItem } from '@/lib/types/ISidenavItem'

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/'

  },
  {
    title: 'Projects',
    path: '/projects',
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' }
    ],
    icon: <GoHomeFill />,
  },
  {
    title: 'Messages',
    path: '/messages'
    // icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    // icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' }
    ]
  },
  {
    title: 'Help',
    path: '/help'
    // icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  }
]
