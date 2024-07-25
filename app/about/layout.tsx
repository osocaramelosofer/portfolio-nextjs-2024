import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AboutLayout({children}:{children: React.ReactNode}) {
    const supabase = createClient()
    const {data:users} = await supabase.from('users').select()
    // const { data: notes } = await supabase.from("notes").select();
      
      
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