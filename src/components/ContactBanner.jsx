import React from 'react'
import { Link } from 'react-router-dom'

const ContactBanner = () => {
  return (
    <section 
      className='relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/contact-banner.jpg")' }}
    >
      {/* Overlay: Rasmni qoraytirish va matnni ajratish uchun */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-[1px] z-0'></div>

      <div className='relative z-10 container mx-auto px-6 flex flex-col items-center gap-6'>
        
        {/* Dekorativ kichik sarlavha */}
        <span className='text-red-500 font-bold uppercase tracking-[5px] text-sm md:text-base animate-pulse'>
          Get In Touch
        </span>

        {/* Asosiy sarlavha */}
        <h1 className='text-white font-black text-6xl md:text-8xl tracking-tight drop-shadow-2xl'>
          Contact
        </h1>

        {/* Navigatsiya yo'li (Breadcrumbs) */}
        <nav className='flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-xl transition-all hover:bg-white/20'>
          <Link 
            to={'/'} 
            className='font-bold text-gray-200 text-lg hover:text-red-500 transition-colors'
          >
            Home
          </Link>
          <span className='text-red-600 font-black text-xl'>/</span>
          <span className='font-bold text-white text-lg'>
            Contact
          </span>
        </nav>

      </div>

      {/* Pastki dekorativ element */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent'></div>
    </section>
  )
}

export default ContactBanner