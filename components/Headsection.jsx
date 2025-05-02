import React from 'react'
import Image from 'next/image'
import logo from '@/assets/LOGO.png'

const Headsection = () => {
  return (
    <main>
        <h1 className="py-12 px-6 md:px-20 text-2xl text-black font-extrabold bg-gray-100">Follow us on LinkedIn</h1>
        <div className='flex justify-between py-2 px-12 md:px-20 text-black font-extrabold bg-gray-100'>
            <div className='flex'>
                <Image src={logo} width={60} alt='armfa logo'/>
                <h4 className='m-auto p-2 text-[14px]'>Africa Roads Maintenance Fund Association</h4>
            </div>
            <button className="mt-6 bg-blue-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full transition">LinkedIn</button>
        </div>

        <section className='grid md:grid-cols-5 gap-8 py-12 px-12 bg-gray-100 md:px-20'>
          <div className="shadow-lg p-6 rounded bg-white h-[500px] m-auto">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297807241011699712?collapsed=1" frameborder="0" allowfullscreen="" title="Embedded post" className='size-fit'></iframe>
          </div>

          <div className="shadow-lg p-6 rounded bg-white h-[500px] m-auto">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297807241011699712?collapsed=1" frameborder="0" allowfullscreen="" title="Embedded post" className='size-fit'></iframe>
          </div>

          <div className="shadow-lg p-6 rounded bg-white h-[500px] m-auto">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297807241011699712?collapsed=1" frameborder="0" allowfullscreen="" title="Embedded post" className='size-fit'></iframe>
          </div>

          <div className="shadow-lg p-6 rounded bg-white h-[500px] m-auto">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297807241011699712?collapsed=1" frameborder="0" allowfullscreen="" title="Embedded post" className='size-fit'></iframe>
          </div>

          <div className="shadow-lg p-6 rounded bg-white h-[500px] m-auto">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297807241011699712?collapsed=1" frameborder="0" allowfullscreen="" title="Embedded post" className='size-fit'></iframe>
          </div>
        </section>

    </main>
   
  ) 
}

export default Headsection 
