import React from 'react'

const LogisticsSolutions = () => {
  return (
    <section 
      className='relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/documentation-img.webp")' }}
    >
      {/* Overlay: Bu qatlam rasm va matn orasida turadi */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0'></div>

      <div className='relative z-10 container mx-auto px-6 py-24 flex flex-col justify-center items-center gap-8 text-center'>
        
        {/* Kichik sarlavha */}
        <div className='flex items-center gap-3'>
          <span className='w-8 h-[2px] bg-red-600'></span>
          <h4 className='text-red-500 font-bold text-sm md:text-lg uppercase tracking-[4px]'>
            Advanced logistics solutions
          </h4>
          <span className='w-8 h-[2px] bg-red-600'></span>
        </div>

        {/* Asosiy sarlavha */}
        <h2 className='text-white font-extrabold text-4xl md:text-6xl xl:text-7xl max-w-5xl leading-tight'>
          We can ensure you get your shipments <span className='text-red-600 italic'>earlier</span> than expected
        </h2>

        {/* Tugma */}
        <div className='mt-4'>
          <button className='relative group px-12 py-5 bg-red-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95'>
            <span className='relative z-10 uppercase tracking-wider'>Join Now</span>
            <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500'></div>
          </button>
        </div>

        <p className='text-gray-400 text-sm font-medium mt-4 border-t border-white/10 pt-4'>
          Over 2,500+ companies trust our global delivery network
        </p>
      </div>
    </section>
  )
}

export default LogisticsSolutions