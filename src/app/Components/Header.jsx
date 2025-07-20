"use client"
import Link from 'next/link';
import {useSession} from "@supabase/auth-helpers-react"

 const Header = () => {
  const session = useSession()
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo/BudgetEase logo.svg"
            alt="BudgetEase Logo"
            className="w-[200px] md:w-[240px]"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-6  px-6 py-2 rounded-[10px] text-black font-semibold text-sm ">
          <a href="/" className="hover:text-teal-700 hover:underline decoration-teal-700 underline-offset-10 decoration-2 transition duration-300">Home</a>
          <a href="/about" className="hover:text-teal-700 hover:underline decoration-teal-700 underline-offset-10 decoration-2 transition duration-300">About</a>
          <a href="/Contact" className="hover:text-teal-700  hover:underline decoration-teal-700 underline-offset-10 decoration-2 transition duration-300">Contact</a>
        </nav>

        {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
      {session ? (
        <Link href="/dashboard">
          <button className="px-5 py-2 text-sm font-medium font-medium bg-teal-600 text-white rounded-[10px] hover:bg-teal-700 transition duration-400">
            Go to Dashboard
          </button>
        </Link>
      ) : (
        <>
          <Link href="/Login">
            <button className="px-5 py-2 text-sm font-medium text-black border border-teal-600 rounded-[10px] hover:bg-teal-50 transition">
              Login
            </button>
          </Link>
          <Link href="/SignUp">
            <button className="px-5 py-2 text-sm font-medium bg-teal-600 text-white rounded-[10px] hover:bg-teal-700 transition duration-400">
              Sign Up
            </button>
          </Link>
        </>
      )}
    </div>

      </div>
    </header>
  );
};

export default Header;
