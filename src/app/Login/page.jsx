"use client"
import React,{useEffect, useRef} from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter();

  useEffect(()=>{
    async function checkUser(){
      const res = await supabase.auth.getUser()
      const user =  res.data.user
      if(user){
        router.push("/dashboard")
      }
    }
    checkUser()

  },[])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    const {data,error} = await supabase.auth.signInWithPassword({email,password});

    if (error){
      console.log("Can't log in")
    }else{
      console.log("you are logged in")
      router.push("/dashboard")
    }

    

  }

  return (
    <div className='min-h-screen bg-[#A0C878] flex items-center justify-center'>

      <div className='bg-white rounded-2xl px-3 py-2 w-[877px] h-[544px] shadow-2xl'>

        <div>
        <h1 className='font-Antipasto text-[48px]'>BudgetEase</h1>
        </div>


        <div className='flex gap-[182px]'>
        <div>
          <Image src="/LG_Img_upscaled.png" alt="Login image" width={221} height={159}/>
        </div>

        <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <br></br>
        <input 
        className='border'
        name = "email"
        ref={ emailRef }
        type='email'

        ></input>

        <br></br>

        <label htmlFor='password'>Password</label>
        <br></br>
        <input 
        className='border'
        name='password'
        ref = { passwordRef }
        type="password"

        ></input>

        <br></br>

        <button 
        type="submit"
        className='border mt-3 p-1'>
          Login
          </button>
      </form>


        </div>
        
      
      </div>
      
    </div>
  )
}
