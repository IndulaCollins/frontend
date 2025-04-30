import React from 'react'
import Image from 'next/image'
import logo from '@/assets/LOGO.png'
import meeting1 from '@/assets/meeting1.jpg'
import meeting2 from '@/assets/meeting2.jpg'
import meeting3 from '@/assets/meeting3.jpg'
import road1 from '@/assets/road1.jpg'
import road2 from '@/assets/road2.jpg'
import road3 from '@/assets/road3.jpg'

const Quicklinks = () => {
  return (
    <main className="font-sans">
    
    <section className="py-12 px-6 md:px-20 bg-gray-100 grid md:grid-cols-3 gap-8 text-left">
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Mission</h3>
        <p className="text-gray-600">To promote sustainable and well well-performing Road Maintenance Funds for better 
          and safer road conditions and increased coverage within and amongst African countries that will enable 
          economic, social and environmental development through meaningful strategic partnerships and developing and sharing useful knowledge, tools and best practices.</p>
        {/* <Image src={meeting1} width={250} alt='' className='m-auto'/> */}
      </div>
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Vision</h3>
        <p className="text-gray-600">To be recognised as enabler of road network improvement in Africa through
        sustainable and collaborating Road Maintenance Funds.</p>
        {/* <Image src={meeting2} width={250} alt='' className='m-auto'/> */}
      </div>
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Objectives</h3>
       
          <ul className="text-gray-600 list-disc">
          <li>The three (3) Themes</li>
          <li>The nine (9) Objectives with accountabilities</li>
          <li>Performance Indicators (PIs) and Targets for each Objective</li>
          <li>Initiatives with their priorities and responsibilities</li>
          <li>Cost estimates of all initiatives over the 5-year period</li>
          <li>Scheduling of these initiatives over the 5-year period.</li>
          </ul>
      
        {/* <Image src={meeting3} width={250} alt='' className='m-auto'/> */}
      </div>
    </section>

    <h1 className="py-6 px-6 md:px-20 text-2xl text-black font-extrabold bg-gray-100">Blogs</h1>

    <section className="py-6 px-6 md:px-20 bg-gray-100 grid md:grid-cols-3 gap-8 text-center">
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Roads</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem quod voluptate quia! Tenetur labore laudantium rem similique voluptatum asperiores reprehenderit in aperiam necessitatibus, cupiditate dolores distinctio ab ad culpa?</p>
        <Image src={road1} width={250} alt=''className='m-auto'/>
      </div>
      
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos perferendis quasi enim, excepturi magni inventore aspernatur debitis in fugit quisquam deserunt impedit nam? Sunt distinctio ratione nisi eveniet labore.</p>
        <Image src={road2} width={250} alt=''className='m-auto'/>
      </div>
      <div className="shadow-lg p-6 rounded bg-white">
        <h3 className="text-xl font-bold mb-2">Highways</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos placeat repudiandae vitae sequi, neque nulla, at sint quibusdam eius officia! Obcaecati cum, cumque eveniet numquam fugit voluptatem laborum ipsum?</p>
        <Image src={road3} width={250} alt='' className='m-auto'/>
      </div>
    </section>


    </main>
  )
}

export default Quicklinks
