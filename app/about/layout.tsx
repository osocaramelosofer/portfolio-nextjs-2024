import { createClient } from "@/lib/supabase/server"

export default async function AboutLayout({children}:{children: React.ReactNode}) {
    const supabase = createClient()
    const {data:users} = await supabase.from('users').select()
    const { data: notes } = await supabase.from("notes").select();
    // console.log("notes:", notes)
    console.log("users:", users)
    // console.log("keys:", process.env.NEXT_PUBLIC_SUPABASE_URL)
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