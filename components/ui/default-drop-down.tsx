'use client'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, MenuItem } from '@nextui-org/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { signIn } from '@/lib/actions';
import { BsGoogle } from 'react-icons/bs';



export default function DefaultDropDown(){


    return(
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full mr-10 md:mr-0"
            >
              <Avatar>
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt="user profile picture"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>
                <SignInButton />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    )
}

function SignInButton() {
  return(
    <form action={signIn}
      className="form-login m-auto max-w-max max-y-max"
    >
      <button
      className="flex gap-x-2 items-center backdrop-blur-md bg-black/30
      rounded-full px-4 py-1"
      >
        <span
        className="font-bold text-white"
        >
          sign in with 
        </span>
        <BsGoogle className="text-red-500"/>
      </button>
    </form>
  )
}