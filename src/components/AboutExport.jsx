import React from 'react'

const AboutExport = () => {
    return (
        <section className='bg-slate-50 w-full py-16 md:py-24 overflow-hidden'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
                    
                    {/* Chap qism: Rasm qismi (Effektlar bilan) */}
                    <div className='w-full lg:w-1/2 relative group'>
                        {/* Dekorativ orqa fon kvadrati */}
                        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-2xl -z-0 group-hover:scale-110 transition-transform duration-500'></div>
                        
                        <div className='relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2'>
                            <img 
                                src="/about-img.png" 
                                alt="Export Logistics" 
                                className='w-full h-auto object-cover'
                            />
                        </div>

                        {/* Rasm ustidagi kichik ma'lumot kartasi */}
                        <div className='absolute -right-4 bottom-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-pulse'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-green-100 p-3 rounded-full'>
                                    <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500 font-bold uppercase'>Reliability</p>
                                    <p className='text-xl font-black text-slate-800'>100% Secure</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* O'ng qism: Matnli kontent */}
                    <div className='w-full lg:w-1/2 space-y-8'>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <span className='w-10 h-[2px] bg-red-600'></span>
                                <h4 className='font-bold text-red-600 text-sm uppercase tracking-[3px]'>
                                    Numbers Speak For Themselves
                                </h4>
                            </div>
                            
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]'>
                                Take Your Goods Anywhere <span className='text-red-600'>Safely</span> And In Time
                            </h2>
                            
                            <p className='text-gray-600 text-lg leading-relaxed'>
                                We don't just move cargo; we move your business forward. Our global export 
                                network ensures that your products reach international markets with 
                                zero hassle and maximum efficiency.
                            </p>
                        </div>

                        {/* Kichik xususiyatlar ro'yxati */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
                            {['Global Tracking', '24/7 Support', 'Fast Delivery', 'Insurance'].map((item, i) => (
                                <div key={i} className='flex items-center gap-3 group cursor-default'>
                                    <div className='w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs group-hover:scale-125 transition-transform'>
                                        ✓
                                    </div>
                                    <span className='font-bold text-slate-700'>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutExport