'use client';

import { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { NavItems, SIDENAV_ITEMS  } from '@/lib/constants/menu';
import { cn } from '@/lib/utils';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MenuItem } from './side-nav';
import {type SideNavItem as SideNavItem1} from '@/lib/types/ISidenavItem'
// import { } from '@/lib/types/ISidenavItem';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import { ThemeToggle } from './theme-toggle';

export default function SideNavTwo() {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true; // default state if window is not defined
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        'sidebarExpanded',
        JSON.stringify(isSidebarExpanded),
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="bg-white">
      <div
        className={cn(
          isSidebarExpanded ? 'w-[200px]' : 'w-[68px]',
          'border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-accent',
        )}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
          {/* Top */}
          <div className="mt-4 relative pb-2">
            <div className="flex flex-col space-y-1">
              {SIDENAV_ITEMS.map((item, idx) => {
                if (item.position === 'top') {
                  return (
                    <Fragment key={idx}>
                      <div className="space-y-1">
                        <SideNavItem
                          label={item.title}
                          icon={item.icon}
                          path={item.path}
                          active={false}
                          isSidebarExpanded={isSidebarExpanded}
                          item={item}
                        />
                      </div>
                    </Fragment>
                  );
                }
              })}
                        {/* {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />
          })} */}
            </div>
          </div>
          {/* Bottom */}
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
            {/* <ThemeToggle isDropDown={true} /> */}
            {SIDENAV_ITEMS.map((item, idx) => {
              if (item.position === 'bottom') {
                return (
                  <Fragment key={idx}>
                    <div className="space-y-1">
                      <SideNavItem
                        item={item}
                        label={item.title}
                        icon={item.icon}
                        path={item.path}
                        active={false}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <FaChevronLeft size={16} className='stroke-foreground'/>
            ) : (
              <FaChevronRight size={16} className='stroke-foreground'/>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
  item: SideNavItem1
}> = ({ label, icon, path, active, isSidebarExpanded, item }) => {
  return (
    <>
      {isSidebarExpanded ? (
        // <Link
        //   href={path}
        //   className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
        //     active
        //       ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
        //       : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
        //   }`}
        // >
        //   <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
        //     {icon}
        //     <span>{label}</span>
        //   </div>
        // </Link>
        <MenuItem item={item}/>
      ) : (
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                  active
                    ? 'font-base text-sm bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                    : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                }`}
              >
                <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                  {icon}
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="px-3 py-1.5 text-xs"
              sideOffset={10}
            >
              <span>{label}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};