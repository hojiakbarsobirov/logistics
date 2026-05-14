import React from 'react'
import Counter from './Counter';

const AboutSection = () => {
    return (
        <section className='container mx-auto w-full py-16 px-4 lg:py-24'>
            <div className='flex flex-col xl:flex-row gap-16 items-center'>
                
                {/* Left Side: Content */}
                <div className='w-full xl:w-1/2 space-y-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <span className='w-12 h-[2px] bg-red-500'></span>
                            <h4 className='font-bold text-red-500 uppercase tracking-widest text-sm'>
                                About Our Company
                            </h4>
                        </div>
                        
                        <h2 className='text-4xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1]'>
                            Safe and <span className='text-red-600'>Faster</span> Logistic Service Near You
                        </h2>
                    </div>

                    <p className='text-gray-500 text-lg leading-relaxed border-l-4 border-red-500 pl-6 italic'>
                        "Our logistics services are designed to prioritize your needs, offering unparalleled safety and speed for all your shipments."
                    </p>

                    <p className='text-gray-400 text-md xl:text-lg leading-relaxed'>
                        Whether it’s local deliveries or international cargo, we ensure your goods reach their destination securely and on time. With advanced tracking systems and a dedicated team, we bring reliability right to your doorstep.
                    </p>

                    {/* Stats Counter Area */}
                    <div className='grid grid-cols-2 gap-8 py-6 border-y border-gray-100'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-red-50 p-3 rounded-lg'>
                                <img className='w-10 h-10 object-contain' src="/experience-icons.png" alt="Experience" />
                            </div>
                            <div>
                                <div className='flex items-center text-3xl font-bold text-slate-900'>
                                    <Counter end={17} /> <span>+</span>
                                </div>
                                <p className='text-sm text-gray-500 font-medium uppercase'>Years Experience</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-red-50 p-3 rounded-lg'>
                                <img className='w-10 h-10 object-contain' src="/done-icons.png" alt="Projects" />
                            </div>
                            <div>
                                <div className='flex items-center text-3xl font-bold text-slate-900'>
                                    <Counter end={100} /> <span>%</span>
                                </div>
                                <p className='text-sm text-gray-500 font-medium uppercase'>Reliability Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Image Stack */}
                <div className='relative w-full xl:w-1/2 h-[500px] md:h-[650px]'>
                    {/* Main Image Background */}
                    <div className='absolute top-0 left-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-2xl'>
                        <img className='w-full h-full object-cover transition-transform duration-700 hover:scale-110' src="/image.png" alt="Logistics Service" />
                    </div>

                    {/* Overlay Value Card */}
                    <div className='absolute bottom-0 right-0 w-full sm:w-[380px] bg-red-600 rounded-2xl p-8 shadow-2xl shadow-red-600/30 transform transition-all hover:-translate-y-2'>
                        <h3 className='text-white font-bold text-2xl mb-6 border-b border-white/20 pb-4'>Our Core Values</h3>
                        
                        <ul className='space-y-4'>
                            {[
                                "Quality service with client trust",
                                "Cargo safety at all delivery stages",
                                "Risk-managed international chains"
                            ].map((text, index) => (
                                <li key={index} className='flex items-start gap-3 text-white/90 group'>
                                    <span className='mt-1 text-white group-hover:scale-125 transition-transform'>✔</span>
                                    <span className='font-medium text-sm leading-snug'>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative Elements */}
                    <div className='absolute -z-10 -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-3xl'></div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection;