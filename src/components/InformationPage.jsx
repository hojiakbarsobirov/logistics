import React from 'react'

const InformationPage = () => {
    return (
        <>
            <section className="shadow-md p-0 xl:p-2 w-full rounded-md flex flex-col xl:flex-row overflow-hidden">
                <div className="bg-blue-800 rounded-none xl:rounded-md w-full border-r-[1px] xl:border-b-[1px] border-gray-400 xl:w-[295px] h-[300px] px-4 xl:h-[300px] flex flex-col justify-center gap-5 items-center">
                    <img className='w-14' src="/pin.png" alt="" />
                    <h2 className='font-medium text-xl text-white'>Location</h2>
                    <p className='text-center text-gray-300'>1800 W Hawthorne Ln, West Chicago, Illinois 60185</p>
                </div>

                <div className="bg-blue-800 rounded-none xl:rounded-md w-full xl:w-[295px] h-[300px] xl:h-[300px] flex flex-col justify-center gap-5 items-center px-4">
                    <img className='w-14' src="/wall-clock.png" alt="" />
                    <h2 className='font-medium text-xl text-white'>Opening Hours</h2>
                    <p className='text-center text-gray-300'>9:00 AM - 6:00 PM Saturday - Thursday</p>
                </div>

                <div className="w-full xl:flex-1 h-[150px] xl:h-[300px] px-8 xl:px-14 flex justify-start items-center">
                    <span className='font-medium text-xl'>For More Information</span>
                </div>
            </section>

        </>
    )
}

export default InformationPage