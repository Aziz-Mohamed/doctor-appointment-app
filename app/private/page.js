import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  console.log({"error is in private" : error , "data is in private": data })
  if (error || !data?.user) {
    
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}