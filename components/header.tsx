import Link from 'next/link';
import HeaderMobile from '@/app/chat/components/header-mobile';
import DropDownAvatar from './ui/drop-down-avatar';
import { createClient } from '@/lib/supabase/server';
import DefaultDropDown from './ui/default-drop-down';

export default async function Header() {
  const supabase = createClient()
  const {data:{ user }} = await supabase.auth.getUser()
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
        {
        user !== null 
          ?(<DropDownAvatar user={user} />)
          : (<DefaultDropDown/>) 
        }
        <HeaderMobile />
      </div>
    </header>
  );
}