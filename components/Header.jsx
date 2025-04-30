import React from 'react'
import Link from 'next/link'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 md:px-12 py-1 flex justify-between items-center shadow-xs">
        <div className="flex justify-between items-center h-full">
        <div className="flex gap-4 text-xl m-5" >
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
            <AiOutlineFacebook />
        </a>
        <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition-colors duration-300"
        >
            <AiOutlineTwitter />
        </a>
        <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
        >
            <AiOutlineInstagram />
        </a>
        <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
        >
            <AiOutlineLinkedin />
        </a>
        </div>
        {/* <div>
            <ul className="flex items-center">
                <Link href='/'><li className="ml-10">Join ARMFA</li></Link>
                <Link href='/'><li className="ml-10">News Letter</li></Link>
                <Link href='/'><li className="ml-10"></li>Members</Link>
            </ul>
        </div> */}
        </div>
    </div>
  )
}

export default Header
