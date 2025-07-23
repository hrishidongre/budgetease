"use client";
import Link from 'next/link';
import { useSession } from "@supabase/auth-helpers-react";

export default function Header() {
  const session = useSession();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="logo/BudgetEase logo.svg"
            alt="BudgetEase Logo"
            className="w-[160px] sm:w-[200px] md:w-[240px]"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold text-black">
          <a href="/" className="hover:text-teal-700 hover:underline underline-offset-8 decoration-teal-700 decoration-2 transition">
            Home
          </a>
          <a href="/about" className="hover:text-teal-700 hover:underline underline-offset-8 decoration-teal-700 decoration-2 transition">
            About
          </a>
          <a href="/Contact" className="hover:text-teal-700 hover:underline underline-offset-8 decoration-teal-700 decoration-2 transition">
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2">
          {session ? (
            <Link href="/dashboard">
              <button className="px-5 py-2 text-sm font-medium bg-teal-600 text-white rounded-[10px] hover:bg-teal-700 transition duration-300">
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
                <button className="px-5 py-2 text-sm font-medium bg-teal-600 text-white rounded-[10px] hover:bg-teal-700 transition duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
