"use client"
import React from 'react'
import { supabase } from '../supabase'
import {useRouter} from "next/navigation"
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import DHeader from './components/dHeader';
import StatsCard from './components/StateCard';

export default function dashboard() {
   const totalBudget = 5000;
  const totalSpent = 3250;
  const totalRemaining = totalBudget - totalSpent;


  const router = useRouter();

  const handleSignOut = async ()=>{
    await supabase.auth.signOut();
    router.push("/");

  }
  return (
    <div className='bg-[#F3F4F6] min-h-screen'> 
      <DHeader/>

      <div className="w-full flex justify-center mt-5 mx-10">
  <div className="w-full max-w-6xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mb-8">
      <StatsCard
        title="Total Budget"
        value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalBudget)}
        icon={Wallet}
        color="text-blue-600"
        trend="Monthly allocation"
      />
      <StatsCard
        title="Total Spent"
        value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalSpent.toFixed(2))}

        icon={TrendingUp}
        color="text-red-600"
        trend={`${((totalSpent / totalBudget) * 100).toFixed(1)}% of budget`}
      />
      <StatsCard
        title="Remaining"
        value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalRemaining.toFixed(2))}

        icon={totalRemaining >= 0 ? TrendingDown : TrendingUp}
        color={totalRemaining >= 0 ? "text-green-600" : "text-red-600"}
        trend={totalRemaining >= 0 ? "Under budget" : "Over budget"}
      />
    </div>
  </div>
</div>


      
      

      


      <h1>this is  dashboard</h1>

      <button className='m-5 p-2 border rounded' onClick={handleSignOut}>Sign Out</button>

    </div>
  )
}
