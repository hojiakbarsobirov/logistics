import React from 'react'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
  return (
    <section 
      className='relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden'
      style={{ backgroundImage: 'url("/about-banner.jpg")' }}
    >
      {/* Overlay: Matnni ajratib ko'rsatish uchun qoraytirilgan qatlam */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px] z-0'></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-6 flex flex-col items-center gap-6'>
        
        {/* Dekorativ chiziqcha */}
        <div className='w-16 h-1 bg-red-600 rounded-full mb-2 animate-bounce'></div>

        {/* Title */}
        <h1 className='text-white font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-center drop-shadow-2xl'>
          About Us
        </h1>

        {/* Breadcrumbs (Navigatsiya yo'li) */}
        <nav className='flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg transition-transform hover:scale-105'>
          <Link 
            to={'/'} 
            className='font-bold text-gray-200 text-lg md:text-xl hover:text-red-500 transition-all duration-300'
          >
            Home
          </Link>
          <span className='text-red-500 font-bold'>/</span>
          <span className='font-bold text-white text-lg md:text-xl'>
            About Us
          </span>
        </nav>

      </div>

      {/* Bottom accent (Pastki qizil chiziq dekor) */}
      <div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-transparent to-red-600 opacity-50'></div>
    </section>
  )
}

export default AboutBanner