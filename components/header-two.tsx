import Link from 'next/link';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { NavItems } from '@/lib/constants/menu';
// import { Menu } from 'lucide-react';
import { MdOutlineMenu } from 'react-icons/md';
import HeaderMobile, { MenuToggle } from '@/app/chat/components/header-mobile';
import { useCycle } from 'framer-motion';
import { Dropdown, DropdownMenu, DropdownTrigger, MenuItem } from '@nextui-org/react';
import DropDownAvatar from './ui/drop-down-avatar';
import { createClient } from '@/lib/supabase/server';

export default async function HeaderTwo() {
  // const navItems = NavItems();
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpen, toggleOpen] = useCycle(false, true)
  const supabase = createClient()
  const {data:user} = await supabase.auth.getUser() 
  console.log("user from header two server:", user)
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        prefetch={false}
      >
        <span className="w-8 h-8 border bg-red-400 rounded-full" />
        <span>Acme Inc</span>
      </Link>

      <div className="ml-4 flex items-center gap-3">
        <DropDownAvatar user={user} />

        {/* <MenuToggle toggle={toggleOpen} /> */}
        <HeaderMobile />
        {/* <button onClick={() => setIsOpen(true)} className="block sm:hidden">
          <MdOutlineMenu  size={24} />
        </button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className='block md:hidden'>
            <div className="pt-4  overflow-y-auto h-fit w-full flex flex-col gap-1">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                    navItem.active
                      ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
                      : 'hover:bg-neutral-200  hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                  }`}
                >
                  <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                    {navItem.icon}
                    <span>{navItem.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  );
}