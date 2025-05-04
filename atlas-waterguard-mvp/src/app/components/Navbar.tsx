"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWater, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="flex items-center">
                                <FaWater className="h-8 w-8 text-blue-600" />
                                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Atlas WaterGuard</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="#features" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">How It Works</Link>
                            <Link href="#impact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Impact</Link>
                            <Link href="#team" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</Link>
                            <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact Us</Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="#features"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#impact"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Impact
                        </Link>
                        <Link
                            href="#team"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Team
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
} 