// 1. Imports: Assets, Hooks, and Icons
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  // 2. State for controlling the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4">
      {/* --- Main Desktop Container --- */}
      <div className="container flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="logo" className="h-8" />
        </div>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <div className="links hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </div>

        {/* Desktop Action Buttons (Hidden on mobile) */}
        <div className="buttons hidden md:flex gap-5">
          <button
            type="button"
            className="text-sm font-medium text-gray-300 hover:text-white transition"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Trigger Button (Visible only on small screens) */}
        <div className="mobile-menu-btn md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar Menu --- */}
      <div
        className={`mobile-menu-links fixed top-0 ${
          isMobileMenuOpen ? "right-0" : "-right-full"
        } w-[270px] h-screen bg-black/50 backdrop-blur-md pt-5 px-5 flex flex-col gap-5 transition-all duration-300`}
      >
        {/* Close Button for Mobile Menu */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-black bg-gray-300 p-2 rounded-lg self-end"
        >
          <IoClose size={24} />
        </button>

        {/* Mobile Navigation Links */}
        <div className="links flex flex-col gap-5 text-base font-medium text-gray-300 mt-5">
          <a href="#home" className="hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#services" className="hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#pricing" className="hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </a>
        </div>

        {/* Mobile Action Buttons */}
        <div className="buttons flex flex-col gap-5 items-start mt-5">
          <button
            type="button"
            className="text-sm font-medium text-gray-300 hover:text-white transition"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
