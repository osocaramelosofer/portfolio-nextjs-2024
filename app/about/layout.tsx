import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AboutLayout({children}:{children: React.ReactNode}) {
    const supabase = createClient()
    const {data:users} = await supabase.from('users').select()
    const { data: notes } = await supabase.from("notes").select();
    // console.log("notes:", notes)
    console.log("users:", users)
    // console.log("keys:", process.env.NEXT_PUBLIC_SUPABASE_URL)
    const origin = headers().get('origin')
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${origin}`,
        },
      })
      
      if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
      }
      
      
    return(
        <>
        <div>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
        <main>
            {children}
        </main>
        </>
    )
} 