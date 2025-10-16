import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo / Brand Name */}
                <a href="/" className="text-2xl font-bold text-blue-600">
                    StreamSync
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <a href="#home" className="hover:text-blue-600 transition">Home</a>
                    <a href="#features" className="hover:text-blue-600 transition">Features</a>
                    <a href="#how" className="hover:text-blue-600 transition">How It Works</a>
                    <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
                    <a href="#support" className="hover:text-blue-600 transition">Support</a>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl text-gray-700 focus:outline-none"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-md animate-fadeIn">
                    <div className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
                        <a href="#home" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#features" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Features</a>
                        <a href="#how" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>How It Works</a>
                        <a href="#pricing" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <a href="#support" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Support</a>
                        <button
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;