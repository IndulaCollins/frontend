import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/LOGO.png"
import Header from './Header'

const Navbar = () => {

  
  return (
    <main className="font-sans">
    
    <header className="top-0 left-0 right-0 bg-white shadow-md z-50">
    <Header/>
      <div className="max-w-8xl mx-auto px-2 md:px-12 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} width={85} alt=''/>
        </Link>
        

        <nav className="space-x-6 text-sm md:text-base text-[#003049] font-medium">
          <ul className='flex'>
          <Link href="/about"><li className="hover:text-orange-500 transition ml-10">About</li></Link>
          <Link href="/events"><li className="hover:text-orange-500 transition ml-10">Events</li></Link>
          <Link href="/publications"><li className="hover:text-orange-500 transition ml-10">Publications</li></Link>
          <Link href="/contact"><li className="hover:text-orange-500 transition ml-10">Contact</li></Link>
          </ul>
        </nav>
      </div>
    </header>
    </main>
  )
}

export default Navbar
