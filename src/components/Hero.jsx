const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-amber-900/50">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Chocolate Store</h1>
        <p className="text-lg mb-8">Indulge in the finest chocolates crafted with love.</p>
        <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg">
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default Hero