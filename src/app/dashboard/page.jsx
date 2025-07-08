"use client"
import React from 'react'

import { supabase } from '../supabase'
import {useRouter} from "next/navigation"

export default function dashboard() {
  const router = useRouter();

  const handleSignOut = async ()=>{
    await supabase.auth.signOut();
    router.push("/");

  }
  return (
    <div>

      <h1>this is  dashboard</h1>

      <button className='m-5 p-2 border rounded' onClick={handleSignOut}>Sign Out</button>

    </div>
  )
}
