'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const maxWidth = '1300px'

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
    <nav className=" w-full top-0 z-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0" data-aos="fade-right" data-aos-delay="100">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[var(--secondary-color)]">
               Logo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  data-aos="fade-down"
                  data-aos-delay={200 + (index * 100)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Register Button - Right Side */}
          <div className="hidden md:block" data-aos="fade-left" data-aos-delay="600">
            <Link
              href="#"
              className="bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-110 hover:translate-x-2 hover:shadow-xl"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-aos="fade-left" data-aos-delay="100">
            <button
              onClick={toggleMenu}
              className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] focus:outline-none focus:text-[var(--secondary-color)]"
            >
              {isMenuOpen ? (
                <X color='white' className="h-6 w-6" />
              ) : (
                <Menu   color='white' className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50" data-aos="fade-down" data-aos-delay="100">
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm"></div>
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          {/* Menu content */}
          <div className="absolute top-16 left-0 right-0 px-4 pt-2 pb-3 space-y-1  bg-gray-200 shadow-lg backdrop-blur-md">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--primary-color)]  hover:text-[var(--secondary-color)] block px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                onClick={() => setIsMenuOpen(false)}
                data-aos="fade-right"
                data-aos-delay={200 + (index * 100)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            ))}
                         {/* Register Button for Mobile */}
             <div className="pt-4 pb-2" data-aos="fade-up" data-aos-delay="600">
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
