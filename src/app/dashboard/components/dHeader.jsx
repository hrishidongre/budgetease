"use client"
import {LogOut} from "lucide-react"
import { supabase } from "@/app/supabase"
import {useEffect , useState} from "react"
import {useUser} from  '@supabase/auth-helpers-react'
import { useRouter } from "next/navigation"

export default function dHeader(){
    const user = useUser()
    const [date,setDate] = useState('')
    const router = useRouter()

    useEffect(()=>{
        const today = new Date()
        const formatted = today.toLocaleDateString("en-GB",{
            day:"2-digit",
            month:"long",
            year:"numeric",
        })
        setDate(formatted)
    },[])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/dashboard')
    }

    return(
        <header className="flex justify-between items-center px-6 py-4 bg-slate-100  shadow">
            {/* Left: Welcome and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <p className="text-lg font-medium">
                Welcome, {user?.user_metadata?.full_name || 'User'}
                </p>
                <span className="text-sm">{date}</span>
            </div>

            {/* Right: Logout */}
            <div className="relative group cursor-pointer" onClick={handleLogout}>
                <LogOut className="w-4 h-4   hover:text-red-500 transition-colors" />
               <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 text-[10px] whitespace-nowrap rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
               Log out
               </span>

            </div>
        </header>
    )
}