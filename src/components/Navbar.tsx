'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Navbarlogo } from '../imgimport/images' 

function Navbar() {
  // State to manage the menu's visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
          <a className='flex' href="javascript:void(0)">
            <Image src={Navbarlogo} alt="" />
            <h1 className='font-bold text-[24px]'>Furniro</h1>
          </a>

          {/* Navigation Menu */}
          <div
            id="collapseMenu"
            className={`max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:bg-white max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transform ${
              menuOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:!block`}
          >
            <ul className='lg:flex gap-x-5 max-lg:space-y-3'>
              
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href='/' className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href='/shop' className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Shop</Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href='/blog' className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link href='/contact' className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</Link>
              </li>
            </ul>



            <div className='flex gap-10'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M12 22C7.99306 22 5.98959 22 4.7448 20.682C3.5 19.364 3.5 17.2426 3.5 13C3.5 8.75736 3.5 6.63604 4.7448 5.31802C5.98959 4 7.99306 4 12 4C16.0069 4 18.0104 4 19.2552 5.31802C20.5 6.63604 20.5 8.75736 20.5 13C20.5 17.2426 20.5 19.364 19.2552 20.682C18.0104 22 16.0069 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.018 9.49261C14.018 10.5972 13.1226 11.4926 12.0181 11.4926C10.9135 11.4926 10.0181 10.5972 10.0181 9.49261C10.0181 8.38808 10.9135 7.49268 12.0181 7.49268C13.1226 7.49268 14.018 8.38808 14.018 9.49261Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.06298 16.7161C9.12133 15.0868 10.802 14.4762 12.0181 14.4774C13.2341 14.4787 14.8656 15.0868 15.9239 16.7161C15.9923 16.8215 16.0112 16.9512 15.9494 17.0607C15.7019 17.4996 14.9334 18.3705 14.3784 18.4296C13.7406 18.4974 12.0723 18.5069 12.0194 18.5072C11.9664 18.5069 10.2466 18.4974 9.60851 18.4296C9.05345 18.3705 8.28496 17.4996 8.03745 17.0607C7.9757 16.9512 7.99456 16.8215 8.06298 16.7161Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
</svg>
</div>



          </div>

          {/* Hamburger Menu Button */}
          <div className='flex max-lg:ml-auto gap-5'>
            <button
              id="toggleOpen"
              className='lg:hidden'
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
                  <path
                    d="M4.293 6.707a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 011.414 1.414L11.414 11l4.293 4.293a1 1 0 01-1.414 1.414L10 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 11 4.293 6.707z"
                  />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
