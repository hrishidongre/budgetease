 const Header = () => {
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
        <nav className="hidden md:flex space-x-6  px-6 py-2 rounded-[10px] text-black font-semibold text-sm ">
          <a href="#" className="hover:text-teal-700 transition duration-300">Home</a>
          <a href="#" className="hover:text-teal-700 transition duration-300">About</a>
          <a href="#" className="hover:text-teal-700 transition duration-300">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-5 py-2 text-sm font-medium text-black border border-teal-600 rounded-[10px] hover:bg-teal-50 transition">
            Login
          </button>
          <button className="px-5 py-2 text-sm font-medium bg-teal-600 text-white rounded-[10px] hover:bg-teal-700 transition duration-400">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
