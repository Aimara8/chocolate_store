import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to the Chocolate Store</h1>
                <p className="text-lg mb-8">Indulge in the finest chocolates crafted with love.</p>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg">
                    Shop Now
                </a>
            </div>
        </section>
    </div>
  )
}

export default Hero