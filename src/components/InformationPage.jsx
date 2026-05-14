import React from 'react'

const InformationPage = () => {
    return (
        <section className="container mx-auto px-4 -mt-12 relative z-10">
            <div className="bg-white shadow-2xl rounded-2xl flex flex-col xl:flex-row overflow-hidden border border-gray-100">
                
                {/* Location Card */}
                <div className="bg-blue-900 group w-full xl:w-[320px] p-10 flex flex-col justify-center items-center gap-4 transition-all duration-300 hover:bg-blue-950 border-b xl:border-b-0 xl:border-r border-blue-800">
                    <div className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <img className='w-10 h-10 object-contain' src="/pin.png" alt="Location" />
                    </div>
                    <h2 className='font-bold text-2xl text-white mt-2'>Location</h2>
                    <p className='text-center text-blue-100/80 leading-relaxed'>
                        1800 W Hawthorne Ln, <br /> 
                        West Chicago, Illinois 60185
                    </p>
                </div>

                {/* Opening Hours Card */}
                <div className="bg-blue-900 group w-full xl:w-[320px] p-10 flex flex-col justify-center items-center gap-4 transition-all duration-300 hover:bg-blue-950">
                    <div className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <img className='w-10 h-10 object-contain' src="/wall-clock.png" alt="Hours" />
                    </div>
                    <h2 className='font-bold text-2xl text-white mt-2'>Opening Hours</h2>
                    <p className='text-center text-blue-100/80 leading-relaxed'>
                        12:00 AM - 12:00 PM <br />
                        <span className="font-semibold text-red-400">Monday - Saturday</span>
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="flex-1 bg-white p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className='font-bold text-2xl text-gray-800'>For More Information</h3>
                        <p className='text-gray-500'>Do you have any questions? We are here to help you.</p>
                    </div>
                    
                    <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all active:scale-95 whitespace-nowrap">
                        Contact Us Now
                    </button>
                </div>

            </div>
        </section>
    )
}

export default InformationPage