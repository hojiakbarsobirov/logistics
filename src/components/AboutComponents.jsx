import React from 'react'
import Counter from './Counter'

const AboutComponents = () => {
    const services = [
        {
            title: "Land Transport",
            icon: "/truck.png",
            desc: "Efficient and reliable land transport solutions for your goods. From small packages to large shipments, we ensure timely deliveries."
        },
        {
            title: "Cargo Storage",
            icon: "/package.png",
            desc: "Secure and spacious cargo storage facilities designed to keep your goods safe. With advanced monitoring systems."
        }
    ]

    return (
        <section className='w-full h-auto py-12 md:py-20'>
            <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'>
                
                {/* Chap qism: Servis kartalari */}
                <div className='w-full lg:w-1/2 space-y-8'>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className='group bg-white rounded-xl shadow-md hover:shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all duration-300 border border-transparent hover:border-red-100'
                        >
                            <div className='bg-red-600 shrink-0 rounded-xl w-20 h-20 flex justify-center items-center shadow-lg shadow-red-200 group-hover:rotate-6 transition-transform'>
                                <img className='w-12 h-12 object-contain' src={service.icon} alt={service.title} />
                            </div>

                            <div className='space-y-3 text-center md:text-left'>
                                <h4 className='text-2xl font-bold text-slate-800'>{service.title}</h4>
                                <p className='text-gray-500 leading-relaxed'>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* O'ng qism: Matnli ma'lumotlar */}
                <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <span className='w-10 h-[2px] bg-red-600'></span>
                            <h4 className='text-red-600 font-bold uppercase tracking-widest text-sm'>About Us</h4>
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight'>
                            Safe, Faster And Easy <span className='text-red-600 italic'>Solution</span> For Shipping
                        </h2>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Our logistics services are designed to prioritize your needs, offering unparalleled safety and speed for all your shipments. Trust us for a seamless logistics experience, wherever you are!
                        </p>
                    </div>

                    {/* Counter (Statistika) bo'limi */}
                    <div className='grid grid-cols-2 gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white rounded-lg shadow-sm'>
                                <img className='w-10 h-10' src="/experience-icons.png" alt="Experience" />
                            </div>
                            <div>
                                <div className='flex items-center text-3xl font-black text-red-600'>
                                    <Counter end={17} />
                                    <span>+</span>
                                </div>
                                <p className='text-sm font-bold text-slate-600 uppercase tracking-tighter'>Years Experience</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white rounded-lg shadow-sm'>
                                <img className='w-10 h-10' src="/done-icons.png" alt="Projects" />
                            </div>
                            <div>
                                <div className='flex items-center text-3xl font-black text-red-600'>
                                    <Counter end={100} />
                                    <span>%</span>
                                </div>
                                <p className='text-sm font-bold text-slate-600 uppercase tracking-tighter'>Projects Done</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutComponents