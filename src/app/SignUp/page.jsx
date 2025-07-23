'use client'

import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { supabase } from '../supabase';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function SignUp() {
  const route = useRouter();

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
      route.push('/');
    }

    fullNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#EFFFFE] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1">
          Budget<span className="text-[#0D9488]">Ease</span>
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-500 mb-6">
          Enter your information to create your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Full Name
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-white">
              <User className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                name="full-name"
                ref={fullNameRef}
                placeholder="Enter your full name"
                className="w-full text-sm bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Email
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-white">
              <Mail className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full text-sm bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-white">
              <Lock className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                ref={passwordRef}
                placeholder="Enter your password"
                className="w-full text-sm bg-transparent outline-none"
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

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 border-white">
              <Lock className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirm-password"
                ref={confirmPasswordRef}
                placeholder="Confirm your password"
                className="w-full text-sm bg-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="ml-2 focus:outline-none"
              >
                {showConfirm ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-[#0D9488] text-white py-2 rounded-md font-semibold hover:bg-[#096B68] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
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
