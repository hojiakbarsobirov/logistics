import React from 'react'

const BannerPage = () => {
    return (
        <section className='relative w-full h-screen min-h-[600px] bg-[url("/banner-img.avif")] bg-center bg-cover bg-no-repeat'>
            {/* Dark Overlay - matn yaxshi ko'rinishi uchun */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent'>
                <div className='container mx-auto px-6 h-full flex flex-col justify-center'>
                    
                    <div className='max-w-4xl space-y-6'>
                        {/* Since 2007 Badge */}
                        <div className='inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-500/50 backdrop-blur-sm'>
                            <span className='text-red-400 font-semibold tracking-wider text-sm uppercase'>
                                Since 2007
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className='text-white font-extrabold text-5xl md:text-6xl lg:text-8xl leading-tight'>
                            Reliable <span className='text-red-500'>Logistics</span> <br />
                            & Transport
                        </h1>

                        {/* Description */}
                        <p className='text-gray-200 font-medium text-lg md:text-xl max-w-xl leading-relaxed'>
                            A trusted logistics partner offering end-to-end solutions in 
                            customs clearance and global transportation.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-wrap items-center gap-4 pt-4'>
                            <button className='px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-600/30'>
                                Get Started
                            </button>
                            
                            <button className='px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300'>
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerPage