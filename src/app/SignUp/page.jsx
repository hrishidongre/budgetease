'use client'

import React, { useRef, useState } from 'react';
import { supabase } from '../supabase';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function SignUp() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.log("Problem:", error.message);
    } else {
      console.log("Success!", data);
    }
    console.log('User:', data?.user);
    console.log('User Metadata:', data?.user?.user_metadata);


    fullNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#EFFFFE] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        
        <h1 className="text-2xl font-bold text-center mb-1">Budget<span className='text-[#0D9488]'>Ease</span></h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your information to create your account
        </p>

        <form name="Create-Account" onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white">
              <User className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                name="full-name"
                ref={fullNameRef}
                placeholder="Enter your full name"
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white">
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
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white">
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
                className="focus:outline-none ml-2"
              >
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white">
              <Lock className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirm-password"
                ref={confirmPasswordRef}
                placeholder="Confirm your password"
                className="w-full text-sm outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="focus:outline-none ml-2"
              >
                {showConfirm ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#0D9488] text-white py-2 rounded-md font-semibold hover:bg-[#096B68] transition duration-400"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link href="/Login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
