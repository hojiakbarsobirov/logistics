import React from 'react'

const OurService = () => {
    return (
        <>
            <section className='w-full py-6 px-0 flex flex-col gap-6 items-start'>
                <h4 className='text-red-500 font-medium text-xl md:text-2xl'>Our Service</h4>
                <h2 className='font-bold text-2xl md:text-4xl xl:text-6xl w-full md:w-[90%] xl:w-[70%]'>
                    We Provide Best Logistic Services
                </h2>

                <div className='w-full flex flex-col xl:flex-row justify-between items-center gap-8'>

                    <div className='w-full md:w-[90%] xl:w-[550px] h-auto py-4'>
                        <div className='bg-white rounded-xl w-full shadow-md p-4 flex items-center gap-4'>
                            <div className='bg-red-600 rounded-lg min-w-[70px] min-h-[70px] flex justify-center items-center'>
                                <img className='w-10 md:w-12' src="/truck.png" alt="Land Transport" />
                            </div>
                            <h3 className='font-medium text-xl md:text-2xl'>Land Transport</h3>
                        </div>
                        <p className='text-gray-500 mt-3 text-sm md:text-base'>
                            Seamless ground transportation tailored to your cargo needs. Whether it’s local distribution or cross-border haulage, our land logistics services guarantee safe, on-schedule delivery with full visibility and operational excellence.
                        </p>
                    </div>

                    <div className='w-full md:w-[90%] xl:w-[550px] h-auto py-4'>
                        <div className='bg-white rounded-xl w-full shadow-md p-4 flex items-center gap-4'>
                            <div className='bg-red-600 rounded-lg min-w-[70px] min-h-[70px] flex justify-center items-center'>
                                <img className='w-8 md:w-10' src="/package.png" alt="Cargo Storage" />
                            </div>
                            <h3 className='font-medium text-xl md:text-2xl'>Cargo Storage</h3>
                        </div>
                        <p className='text-gray-500 mt-3 text-sm md:text-base'>
                            State-of-the-art storage solutions built for safety, scalability, and efficiency. Our facilities offer controlled environments, real-time inventory tracking, and adaptable space to meet the demands of your supply chain.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurService
