"use client"
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-6">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center ">
        <div>
          <img src="logo/footer_logo.svg" alt="footer logo" className="w-[200px] mb-2" />
          <p className="text-[10px]">© 2025 BudgetEase. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <ul className="text-xs space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <ul className="text-xs space-y-1">
            <li>Email: competitivehridon2024@gmail.com</li>
            <li>Phone: +91 91314-XXXXX</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


