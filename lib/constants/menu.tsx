import { GoHomeFill } from 'react-icons/go';
import { type SideNavItem } from '@/lib/types/ISidenavItem';
import { usePathname } from 'next/navigation';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import {
  FaBell,
  FaBriefcase,
  FaGrinHearts,
  FaHandsHelping,
  FaMailBulk,
  FaPersonBooth,
  FaUserAlt,
} from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { LuMessagesSquare } from 'react-icons/lu';
import { FiLogIn } from 'react-icons/fi';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    position: 'top',
  },
  {
    title: 'About',
    path: '/about',
    submenu: true,
    subMenuItems: [
      { title: 'About', path: '/about' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
    icon: <FaPersonBooth size={20} />,
    position: 'top',
  },
  {
    title: 'Chat',
    path: '/',
    icon: <HiChatBubbleLeftRight size={20} />,
    submenu: true,
    subMenuItems: [
      { title: 'Planner AI', path: '/chat/planner' },
      { title: 'Search Places', path: '/chat' },
    ],
    position: 'top',
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FiLogIn size={20} />,
    position: 'top',
  },
];

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <GoHomeFill size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Chat',
      href: '/chat',
      icon: <LuMessagesSquare size={20} />,
      active: isNavItemActive(pathname, '/chat'),
    },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: <FaBell size={20} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'top',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <FaBriefcase size={20} />,
      active: isNavItemActive(pathname, '/projects'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <IoIosSettings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};
