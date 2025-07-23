import React from 'react'

const AboutSection = () => {
    return (
        <>
            <section className=' w-full h-auto  flex flex-col xl:flex-row justify-between items-center py-5'>

                <div className='w-full xl:w-[580px] h-auto py-5 space-y-6 flex flex-col justify-around items-start px-2'>
                    <h4 className='font-medium text-red-500 text-md xl:text-xl'>About Us</h4>

                    <h2 className='font-medium text-3xl xl:text-7xl'>Safe and Faster Logistic Service Neer You</h2>

                    <p className='text-gray-400 text-md xl:text-lg'>Our logistics services are designed to prioritize your needs, offering unparalleled safety and speed for all your shipments. Whether it’s local deliveries or international cargo, we ensure your goods reach their destination securely and on time. With advanced tracking systems and a dedicated team, we bring reliability and convenience right to your doorstep. Trust us for a seamless logistics experience, wherever you are!</p>

                    <div className=' w-full h-36 flex justify-between items-center'>
                        <div className='flex items-center gap-2 xl:gap-4'>
                            <img className='w-8 xl:w-10' src="/experience-icons.png" alt="" />
                            <div className='flex flex-col items-center gap-2'>
                                <h2 className='text-red-500 font-bold text-3xl xl:text-4xl'>4+</h2>
                                <p className='font-medium'>Years Experience</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img className='w-8 xl:w-10' src="/done-icons.png" alt="" />
                            <div className='flex flex-col items-center gap-2'>
                                <h2 className='text-red-500 font-bold text-3xl xl:text-4xl'>99+</h2>
                                <p className='font-medium'>Project Done</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full xl:w-[580px] h-[700px] flex justify-center items-center'>
                    <img className='w-[60%] absolute top-1 left-1' src="/image.png" alt="" />

                    <div className='bg-white w-[350px] h-[450px] absolute bottom-1 right-1 flex justify-center items-center'>
                        <div className='bg-red-600 w-[300px] h-[400px] flex flex-col justify-between items-start p-6'>
                            <h3 className='text-white font-medium text-2xl'>Our Core Value</h3>

                            <h3 className='text-white font-medium'>• Following the quality of our service thus having gained trust of our many clients.</h3>

                            <h3 className='text-white font-medium'>• We provide with cargo safety throughout all the stages of our delivery process.</h3>

                            <h3 className='text-white font-medium'>• International supply chains involves a myriad of unknown risks and challenging.</h3>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutSection