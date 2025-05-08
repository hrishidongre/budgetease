"use client"
import React,{ useEffect, useState, useRef } from 'react'
import { supabase } from '../supabase'
import Link from 'next/link'


export default function SignUp() {
  
  
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value 
    const password = passwordRef.current.value

    const {data,error} = await supabase.auth.signUp({email,password})

    if (error){
      console.log("Problem")
    }else{
      console.log("Success!",data.email)
    }
 
    emailRef.current.value = ""
    passwordRef.current.value = ""
    

    
  }


  return (
    <>


    <div className='min-h-screen bg-[#A0C878] flex items-center justify-center'>
      <div className='bg-white rounded-2xl px-3 py-2 w-[877px] h-[544px] shadow-2xl'>
      <div className='flex justify-between items-center mb-4 p'>
          <h1 className='font-Antipasto text-[48px]'>BudgetEase</h1>
        </div>

      <form name="Create-Account" onSubmit={handleSubmit}  className='flex flex-col px-65'>
        <h1 className='text-[32px] mb-[50px]  px-[40px] font-medium'>Create Account</h1>
      <label htmlFor="email" className='mx-[20px] mb-[5px] text-[13px]'>Email</label>
        <input 
        className="bg-[#F8F8F8] mx-5 p-[9px] text-[11px] "   
        name="email" 
        ref={emailRef}
        placeholder='Email' 
        type="email"></input>

        <br></br>

        <label htmlFor="password" className='mx-[20px] mb-[5px] text-[13px]'>Password</label>
        <input 
        className="bg-[#F8F8F8] mx-5 p-[9px] text-[11px]"   
        name="password" 
        ref={passwordRef}
        placeholder='Password' 
        type="password"></input>

        <br></br>


      <button 
      type="submit" 
      className='bg-[#A0C878] rounded-[10px] mt-[42px] mx-[104px] px-[23px] py-[6px]  font-medium text-[13px] h-[35px] w-[95px]'>
        Sign Up
        </button>

      </form>
      <div className='text-[12px] mt-[20px] mx-[320px]'>
        Already have a account?   
        <Link href="/Login" className='text-[#0084C3]'>
        Login
        </Link>
      </div>


      </div>
      


    </div>
    </>
  )
}
