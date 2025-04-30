import React from 'react'

const HeroSection = () => {
  return (
    <main className="font-sans">
    
    <section className="relative bg-[url('/images/africa-road.jpg')] bg-cover bg-center h-screen text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-50 z-10" />
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">African Road Maintenance Funds Association</h1>
        <p className="text-lg md:text-2xl">Enhancing road infrastructure across Africa</p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition">Learn More</button>
      </div>
    </section>

    </main>
  )
}

export default HeroSection
