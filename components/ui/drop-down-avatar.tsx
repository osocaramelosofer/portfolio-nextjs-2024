'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  MenuItem,
} from '@nextui-org/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { TbLogout2 } from 'react-icons/tb';
interface DropDownAvatarProps {
  user: any | null;
}

export default function DropDownAvatar({ user }: DropDownAvatarProps) {
  const { avatar_url, email, full_name } = user.user_metadata;

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full mr-10 md:mr-0"
        >
          <Avatar>
            <AvatarImage
              src={avatar_url ?? 'https://github.com/shadcn.png'}
              alt="user profile picture"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{email}</p>
        </DropdownItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Support</MenuItem>
        <DropdownItem>
          <button onClick={signOut}>Logout</button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.reload();
    toast('My toast', {
      className: '',
      description: "you've logout",
      duration: 6000,
      icon: <TbLogout2 />,
    });
  } else {
    console.error('Error signing out:', error);
  }
}
