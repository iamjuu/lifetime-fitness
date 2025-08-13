'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const maxWidth = '1300px'

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[var(--primary-color)]">
                Lifetime Fitness
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Register Button - Right Side */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-110 hover:translate-x-2 hover:shadow-xl"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] focus:outline-none focus:text-[var(--secondary-color)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] block px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            ))}
                         {/* Register Button for Mobile */}
             <div className="pt-4 pb-2">
               <Link
                 href="#"
                 className="bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out hover:scale-110 hover:translate-x-2 hover:shadow-xl text-center"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Register
               </Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
