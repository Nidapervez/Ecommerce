"use client";
import { useState } from 'react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavigationMenuDemo from "./navlinks";
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';





const Navbar = () => {
  // const {cart, loading} = useSelector((state)=>state.cart)
  // const {cart,loading}=useSelector(((state)=>state.cart));
  // console.log('Cart Loading', cart, loading)
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage dropdown visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleCart = () => setIsCartOpen(!isCartOpen); // Function to toggle cart visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Function to toggle mobile menu

  return (
    <div className="relative flex flex-col bg-[#eeeeee]">
      {/* Navbar Header */}
      <div className="flex items-center justify-between p-4 text-black border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center lg:justify-start w-full lg:w-auto">
          <Image 
            src={require('../public/Pictures/nidzzzzz.jpg')} 
            alt="logo"
            className='hidden lg:block'
            width={50}
            height={70}
          />
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden text-2xl p-2 rounded-md hover:bg-gray-200 transition"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Navigation and Cart Button */}

     <Link href={'/cart'}> <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenuDemo />
          <div
            tabIndex={0}
            className="relative btn btn-circle bg-slate-200 border:rounded hover:text-orange-600"
            onClick={toggleCart} // Toggle dropdown on click
          >
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Badge to show cart item count */}
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                8
              </span>
            </div>
          </div>
        </div></Link>


      </div>
   
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white absolute top-16 left-0 w-full shadow-md z-10 transition-transform transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col p-4">
          <NavigationMenuDemo />
          <div className='relative flex items-center mt-4'>
            <div
              tabIndex={0}
              className="relative btn btn-circle bg-slate-200 border:rounded hover:text-orange-600"
              onClick={toggleCart}
            >
              <div className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* {cart.length>0 &&(
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {cart.length}
                </span>)} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Cart */}
      
    </div>
  );
};

export default Navbar;
