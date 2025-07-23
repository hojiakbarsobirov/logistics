import React from 'react'

const BannerPage = () => {
    return (
        <>
            <section className='bg-[url("/banner-img.avif")] w-full h-[70vh] bg-center bg-cover'>
                <header className='bg-black w-full h-full bg-opacity-45 flex justify-center items-center'>
                    <div className='w-[95%] xl:w-[62%] h-full flex flex-col justify-center gap-8 xl:gap-14 items-start'>
                        <h4 className='text-white font-medium text-xl'>Since 1998</h4>

                        <h2 className='text-white font-bold text-4xl xl:text-7xl w-full xl:w-[60%]'>Best Transportation & Logistic Service</h2>

                        <h4 className='text-white font-medium  text-lg xl:text-xl w-full xl:w-[50%]'>Representative logistic operator providing full range of service in the sphere of customs clearance and transportaion worldwide.</h4>

                        <div className='flex items-center gap-5'>
                            <button className='font-medium text-white px-6 py-3 bg-red-500 rounded-md'>Get Started</button>
                            <button className='font-medium text-red-500 px-6 py-3 bg-white rounded-md'>Our Service</button>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default BannerPage