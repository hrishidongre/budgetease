import {  Instagram, Linkedin } from 'lucide-react';





const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-6 pb-4">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 ">

        {/* Logo Section */}
        <div>
          <img
            src="logo/footer_logo.svg"
            alt="footer logo"
            className="w-[200px] mb-2"
          />
          <p className="text-[10px]">© 2025 BudgetEase. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <ul className="text-xs space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <ul className="text-xs space-y-1">
            <li>Email: competitivehridon2024@gmail.com</li>
            <li>Phone: +91 91314-XXXXX</li>
            <li>Location: India</li>
          </ul>
        </div>

        

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white hover:text-pink-500" />
            </a>
            <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white hover:text-blue-700" />
            </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
