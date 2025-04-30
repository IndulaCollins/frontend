import React from 'react'
import Image from 'next/image'
import logo from '@/assets/LOGO.png'

const Footer = () => {
  return (
    <main className="font-sans">  
          <footer className="bg-[#003049] text-white py-10 px-6 md:px-20">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                {/* <Image src={logo} width={50} className='m-auto'/> */}
                <h4 className="font-bold text-lg mb-3">African Road Maintenance Fund Association </h4>
                <p>Connecting Africa through road infrastructure development and policy.</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3">Quick Links</h4>
                <ul>
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Events</a></li>
                  <li><a href="#" className="hover:underline">Publications</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3">Contact</h4>
                <p>Email: info@armfa.africa</p>
                <p>Phone: +254 123 456789</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-400">Facebook</a>
                  <a href="#" className="hover:text-yellow-400">Twitter</a>
                  <a href="#" className="hover:text-yellow-400">LinkedIn</a>
                </div>
                
              </div>
            </div>
            <div className="text-center mt-10 text-sm">&copy; {new Date().getFullYear()} ARMFA. All rights reserved.</div>
          </footer>
        </main>
  )
}

export default Footer
