import React from 'react'

const ExpressAbout = () => {
    return (
        <>
            <section className=' w-full h-auto py-5 flex flex-col xl:flex-row justify-between items-start'>

                <div className='w-full xl:w-[580px] h-auto py-4 flex flex-col justify-center xl:justify-start items-start p-0 xl:p-5'>
                    <h4 className='text-red-600 font-medium text-xl mb-5'>Numbers Speak For Themselves</h4>
                    <h2 className='font-medium text-4xl xl:text-6xl'>Take Your Goods Anywhere Safely</h2>
                </div>

                <div className='w-full xl:w-[580px] h-[500px] flex justify-center items-center'>
                    <img className='h-[400px] xl:h-full' src="/express-img.png" alt="" />
                </div>

            </section>
        </>
    )
}

export default ExpressAbout