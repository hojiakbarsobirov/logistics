import React from 'react'

const AboutExport = () => {
    return (
        <>
            <section className='bg-gray-100 w-full h-auto py-10 px-2 flex flex-col-reverse gap-2 xl:gap-10 xl:flex-row justify-center items-start'>

                <div className=' w-full xl:w-[600px] h-auto py-2'>
                    <img src="/about-img.png" alt="" />
                </div>

                <div className='w-full xl:w-[600px] h-auto py-5 space-y-10'>
                    <h4 className='font-medium text-red-600 text-xl'>Numbers Speak For Themselves</h4>
                    <h3 className='text-3xl font-medium xl:text-6xl xl:font-bold'>Take Your Goods Anywhere Safely And In Time</h3>
                </div>

            </section>
        </>
    )
}

export default AboutExport