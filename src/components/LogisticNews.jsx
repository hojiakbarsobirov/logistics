import React from 'react'

const LogisticNews = () => {
    // Hamkorlar logotiplari uchun namunaviy massiv
    const partners = [
        { id: 1, name: 'Global Ship', logo: '/partner1.png' },
        { id: 2, name: 'Eco Freight', logo: '/partner2.png' },
        { id: 3, name: 'Express Way', logo: '/partner3.png' },
        { id: 4, name: 'Fast Cargo', logo: '/partner4.png' },
        { id: 5, name: 'Safe Delivery', logo: '/partner5.png' },
    ];

    return (
        <section className='w-full py-20 bg-slate-50/50'>
            <div className='container mx-auto px-4'>
                
                {/* Header Section */}
                <div className='flex flex-col justify-center items-center gap-4 mb-16 text-center'>
                    <div className='flex items-center gap-3'>
                        <span className='w-8 h-[2px] bg-red-600'></span>
                        <h4 className='text-red-600 font-bold uppercase tracking-[3px] text-xs md:text-sm'>
                            Best News & Partners
                        </h4>
                        <span className='w-8 h-[2px] bg-red-600'></span>
                    </div>
                    
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 max-w-3xl leading-tight'>
                        Our Latest <span className='text-red-600'>Logistics</span> News & Global Partners
                    </h2>
                    
                    <p className='text-gray-500 max-w-xl mt-2'>
                        Stay updated with the latest industry trends and meet our trusted network of global logistics partners.
                    </p>
                </div>

                {/* Partners Logo Section (Placeholder) */}
                <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-10'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-60'>
                        {/* 
                            Logotiplar bor bo'lsa shunday map qilish mumkin. 
                            Hozircha matn ko'rinishida stil beramiz.
                        */}
                        {partners.map((partner) => (
                            <div 
                                key={partner.id} 
                                className='grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex justify-center'
                            >
                                <span className='font-black text-2xl text-slate-300 hover:text-red-600 cursor-pointer'>
                                    {partner.name}
                                </span>
                                {/* <img src={partner.logo} alt={partner.name} className="h-12 object-contain" /> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className='mt-20 flex justify-center'>
                    <div className='w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full'></div>
                </div>
            </div>
        </section>
    )
}

export default LogisticNews