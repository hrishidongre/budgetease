'use client'
import React, { useRef, useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    async function checkUser() {
      const res = await supabase.auth.getUser()
      const user = res.data.user
      if (user) {
        router.push('/dashboard')
      }
    }
    checkUser()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert("Login failed: " + error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#EFFFFE] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center mb-1">Welcome <span className='text-[#0D9488]'>Back</span></h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-800">
              Email
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-gray-100">
              <Mail className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-gray-100">
              <Lock className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                ref={passwordRef}
                placeholder="Enter your password"
                className="w-full text-sm outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>


          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-[#0D9488] text-white py-2 rounded-md font-semibold hover:bg-[#096B68] transition duration-400"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <Link href="/SignUp" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
