import React from 'react'

const OurService = () => {
    const services = [
        {
            title: "Land Transport",
            icon: "/truck.png",
            desc: "Seamless ground transportation tailored to your cargo needs. Whether it’s local distribution or cross-border haulage, our land logistics services guarantee safe, on-schedule delivery.",
            link: "#"
        },
        {
            title: "Cargo Storage",
            icon: "/package.png",
            desc: "State-of-the-art storage solutions built for safety, scalability, and efficiency. Our facilities offer controlled environments, real-time inventory tracking, and adaptable space.",
            link: "#"
        }
    ];

    return (
        <section className='container mx-auto py-20 px-4'>
            {/* Section Header */}
            <div className='flex flex-col items-start gap-4 mb-16'>
                <div className='flex items-center gap-3'>
                    <span className='w-10 h-1 bg-red-600 rounded-full'></span>
                    <h4 className='text-red-600 font-bold uppercase tracking-widest text-sm'>
                        Our Services
                    </h4>
                </div>
                <h2 className='font-extrabold text-3xl md:text-5xl lg:text-6xl text-slate-900 max-w-2xl leading-tight'>
                    We Provide Best <span className='text-red-600'>Logistic</span> Services
                </h2>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {services.map((item, index) => (
                    <div 
                        key={index} 
                        className='group bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-2'
                    >
                        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 mb-6'>
                            {/* Icon Box */}
                            <div className='relative'>
                                <div className='bg-red-600 w-20 h-20 rounded-2xl flex justify-center items-center shadow-lg shadow-red-600/40 transform group-hover:rotate-6 transition-transform duration-300'>
                                    <img className='w-10 h-10 object-contain brightness-0 invert' src={item.icon} alt={item.title} />
                                </div>
                                {/* Decorative dot */}
                                <div className='absolute -bottom-2 -right-2 w-6 h-6 bg-slate-100 rounded-full border-4 border-white'></div>
                            </div>

                            <h3 className='font-bold text-2xl md:text-3xl text-slate-800'>
                                {item.title}
                            </h3>
                        </div>

                        <p className='text-gray-500 text-lg leading-relaxed mb-8'>
                            {item.desc}
                        </p>

                        <a 
                            href={item.link} 
                            className='inline-flex items-center gap-2 font-bold text-red-600 group/link'
                        >
                            Explore More 
                            <span className='group-hover/link:translate-x-2 transition-transform duration-300'>→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurService