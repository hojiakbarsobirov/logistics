import React from 'react'

const ExpressAbout = () => {
    return (
        <section className='container mx-auto w-full py-16 lg:py-24 px-4 font-sans'>
            <div className='flex flex-col xl:flex-row items-center gap-12 xl:gap-20'>
                
                {/* Text Content Area */}
                <div className='w-full xl:w-1/2 order-2 xl:order-1'>
                    <div className='space-y-6'>
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100'>
                            <span className='text-red-600 font-bold text-xs md:text-sm uppercase tracking-wider'>
                                100% Reliable Delivery
                            </span>
                        </div>

                        <h4 className='text-gray-500 font-medium text-lg md:text-xl italic leading-relaxed'>
                            "Behind every number, there is a <span className='text-slate-900 font-bold not-italic'>successful delivery</span>"
                        </h4>

                        <h2 className='font-extrabold text-4xl md:text-5xl xl:text-7xl text-slate-900 leading-[1.1]'>
                            Take Your Goods <br /> 
                            Anywhere <span className='text-red-600'>Safely</span>
                        </h2>

                        <p className='text-gray-500 text-lg max-w-lg'>
                            We combine cutting-edge technology with decades of experience to ensure your cargo moves seamlessly across borders.
                        </p>

                        {/* Quick Benefits List */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
                            {['Global Tracking', 'Fastest Routes', '24/7 Support', 'Secure Packaging'].map((item, idx) => (
                                <div key={idx} className='flex items-center gap-2'>
                                    <div className='w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0'>
                                        <svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                                        </svg>
                                    </div>
                                    <span className='font-semibold text-slate-700 text-sm md:text-base'>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Area */}
                <div className='w-full xl:w-1/2 order-1 xl:order-2 flex justify-center items-center relative'>
                    <div className='absolute w-[80%] h-[80%] bg-slate-100 rounded-full -z-10 blur-3xl opacity-60 animate-pulse'></div>
                    
                    <div className='relative group shadow-2xl rounded-3xl overflow-hidden'>
                        <img 
                            className='w-full h-auto max-h-[500px] xl:max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105' 
                            src="/express-img.png" 
                            alt="Express Delivery" 
                        />
                        
                        <div className='absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl hidden md:block'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-green-500 w-3 h-3 rounded-full animate-ping'></div>
                                <span className='font-bold text-slate-800 text-sm'>Express Tracking Active</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExpressAbout