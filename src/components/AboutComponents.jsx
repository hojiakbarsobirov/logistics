import React from 'react'
import Counter from './Counter'

const AboutComponents = () => {
    return (
        <>
            <section className='w-full h-auto py-5 flex flex-col xl:flex-row gap-5 justify-between items-center'>

                <div className='w-full xl:w-[570px] gap-5 h-auto flex flex-col justify-center items-center'>

                    <div className='rounded-lg shadow-lg gap-5 p-5 w-full h-auto py-5 flex flex-col xl:flex-row justify-center items-center'>
                        <div className='bg-red-600 rounded-md w-[80px] h-[80px] flex justify-center items-center'>
                            <img className='w-14' src="/truck.png" alt="" />
                        </div>

                        <div className='w-full'>
                            <h4 className='text-center xl:text-start text-xl font-bold'>Land Transport</h4>
                            <p className='text-gray-500 text-center xl:text-start mt-5 xl:mt-0'>Efficient and reliable land transport solutions for your goods. From small packages to large shipments, we ensure timely deliveries with utmost care and precision across any distance.</p>
                        </div>
                    </div>

                    <div className='rounded-lg shadow-lg gap-5 p-5 w-full h-auto py-5 flex flex-col xl:flex-row justify-center items-center'>
                        <div className='bg-red-600 rounded-md w-[80px] h-[80px] flex justify-center items-center'>
                            <img className='w-14' src="/package.png" alt="" />
                        </div>

                        <div className='w-full'>
                            <h4 className='text-center xl:text-start text-xl font-bold'>Cargo Storage</h4>
                            <p className='text-gray-500 text-center xl:text-start mt-5 xl:mt-0'>Secure and spacious cargo storage facilities designed to keep your goods safe. With advanced monitoring systems and flexible options, your inventory is always in trusted hands</p>
                        </div>
                    </div>

                </div>

                <div className=' w-full xl:w-[570px] h-auto py-5 gap-10 flex flex-col justify-between items-start'>
                    <h4 className='text-red-600 font-medium text-xl'>About Us</h4>
                    <h3 className='font-medium xl:font-bold text-3xl xl:text-6xl'>Safe, Faster And Easy Solution For Shipping</h3>
                    <p className='text-gray-500'>Our logistics services are designed to prioritize your needs, offering unparalleled safety and speed for all your shipments. Whether it’s local deliveries or international cargo, we ensure your goods reach their destination securely and on time. With advanced tracking systems and a dedicated team, we bring reliability and convenience right to your doorstep. Trust us for a seamless logistics experience, wherever you are!</p>

                     <div className='w-full h-36 flex justify-between items-center'>
                        <div className='flex items-center gap-2 xl:gap-4'>
                            <img className='w-8 xl:w-10' src="/experience-icons.png" alt="Experience Icon" />
                            <div className='flex flex-col items-center gap-2'>
                                <Counter end={17} />
                                <p className='font-medium'>Years Experience</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img className='w-8 xl:w-10' src="/done-icons.png" alt="Project Done Icon" />
                            <div className='flex flex-col items-center gap-2'>
                                <Counter end={100} />
                                <p className='font-medium'>Project Done</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutComponents