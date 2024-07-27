'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';

interface SignInProps {
  page?: string;
}
export async function signIn({ page }: SignInProps) {
  // 1# Create supabase server client
  const supabase = createClient();
  // 2# Create new url to redirect after successful login
  const origin = headers().get('origin');
  const callbackUrl = new URL('auth/callback', `${origin}`);
  // callbackUrl.searchParams.set('page', page ?? 'about');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        next: 'about',
      },
    },
  });

  if (error) {
    console.log(error);
  } else {
    if (data.url) {
      redirect(data.url);
    }
  }
}
