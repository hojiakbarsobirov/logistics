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
                            Efficient and reliable land transport solutions for your goods. From small packages to large shipments, we ensure timely deliveries with utmost care and precision across any distance.
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
                            Secure and spacious cargo storage facilities designed to keep your goods safe. With advanced monitoring systems and flexible options, your inventory is always in trusted hands.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurService
