'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from './supabase/server'

export async function signIn() {
  const supabase = createClient()
  const origin = headers().get('origin')
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (error) {
    console.log(error)
  } else {
    if (data.url) {
      redirect(data.url)
    }
  }
}
