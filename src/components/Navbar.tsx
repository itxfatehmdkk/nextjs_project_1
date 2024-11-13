"use client";
import React from 'react'
import Home from '../app/page';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
    <nav className='bg-teal-500 h-12 px-4 py-8 flex justify-between items-center '>
      <div>
        <h1 className='text-2xl font-mono font-bold text-white '>
          <a href='#!'> Fateh Mohammad</a>
        </h1>

      </div>

      <div>
        <ul className='flex space-x-7' >
           <li> <Link href="/" className="hover:text-blue-200 font-bold" > Home </Link> </li>
         <li> <Link href="/About" className="hover:text-blue-200 font-bold"> About </Link></li>
         <li> <Link href="/ContactUs "className="hover:text-blue-200 font-bold"> Contact Us </Link></li>
         
        </ul>
      </div>
      <div>
        <ul className='flex space-x-5 font semi-bold' >
          <li> <Link href="#!" className="hover:text-blue-200 font-bold"> Login </Link></li>
          <li> <Link href="#!" className="hover:text-blue-200 font-bold"> Sign Up</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar