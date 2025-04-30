import React from 'react'
import Image from 'next/image'
import road1 from '@/assets/road1.jpg'
import road2 from '@/assets/road2.jpg'
import road3 from '@/assets/road3.jpg'

const NewsEvents = () => {
  return (
    <div>
        <h1 className="py-12 px-6 md:px-20 text-2xl text-black font-extrabold bg-gray-100">News & Events</h1>

        <section className="py-6 px-6 md:px-20 bg-gray-100 grid md:grid-cols-3 gap-8 text-center">
              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Kenya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos perferendis</p>
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width= '400' height= '200' src="https://www.youtube.com/embed/dWrLrA_-en4?si=SetIRXyqWmHLeTwj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
              </div>

              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Uganda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos perferendis</p>
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width= '400' height= '200' src="https://www.youtube.com/embed/5kUW_hH_2-E?si=00bOxRUp0ykTPfKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
              </div>

              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Tanzania</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos</p>
                
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/Wr5gDd7Z9aM?si=lduciqtpPY2W3YEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
                
              </div>

              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Niger</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos</p>
                
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/Wr5gDd7Z9aM?si=lduciqtpPY2W3YEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
                
              </div>

              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Cameroon</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos</p>
                
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/Wr5gDd7Z9aM?si=lduciqtpPY2W3YEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
                
              </div>

              <div className="shadow-lg p-6 rounded bg-white">
                <h3 className="text-xl font-bold mb-2">Ethiopia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos</p>
                
                <div className="pb-[56.25%] h-0 overflow-hidden max-w-full rounded">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/Wr5gDd7Z9aM?si=lduciqtpPY2W3YEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='m-auto'></iframe>
                </div>
                
              </div>

            </section>

  
    </div>
  )
}

export default NewsEvents


