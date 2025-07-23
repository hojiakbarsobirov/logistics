import React from 'react'

const FooterPage = () => {
    return (
        <>
            <section className='bg-blue-950 w-full h-auto py-5 flex flex-col justify-center items-center'>

                <header className=' w-[95%] xl:w-[62%] h-[85%] py-5 px-2 xl:px-0'>
                    <div className='w-full flex flex-col justify-center items-start xl:items-center'>
                        <img className='w-36' src="/navbar-logo.png" alt="" />
                        <p className='text-gray-400 w-full xl:w-[50%]'>Golden Bell Express is a representative logistics operator providing full range of service in the sphere of customs cargo and transportation worldwide.</p>
                    </div>

                        <div className='w-full flex flex-col py-5 xl:flex-row justify-between items-start xl:items-center gap-5'>
                            <div>
                                <h4 className='font-medium text-white text-xl mb-4'>Company</h4>
                                <h4 className='flex items-center text-gray-400 gap-2'>
                                    <img className='w-5' src="/right.png" alt="" />
                                    Home
                                </h4>
                                <h4 className='flex items-center text-gray-400 gap-2'>
                                    <img className='w-5' src="/right.png" alt="" />
                                    About Us
                                </h4>
                                <h4 className='flex items-center text-gray-400 gap-2'>
                                    <img className='w-5' src="/right.png" alt="" />
                                    Contact
                                </h4>
                                <h4 className='flex items-center text-gray-400 gap-2'>
                                    <img className='w-5' src="/right.png" alt="" />
                                    Privacy Policy
                                </h4>
                            </div>

                            <div>
                                <h4 className='font-medium text-xl text-white mb-5'>Quick Contact</h4>
                                <h4 className='text-gray-400 flex items-center gap-2 '>
                                    <img src="/location-icons.png" alt="" />
                                    1800 W Hawthorne Ln, Wesst Chicago, Illinois 60185
                                </h4>
                                <h4 className='text-gray-400 flex items-center gap-2'>
                                    <img className='w-4' src="/phone-icons.png" alt="" />
                                    (630) 300-0338
                                </h4>
                                <h4 className='text-gray-400 flex items-center gap-2'>
                                    <img className='w-4' src="/email-icons.png" alt="" />
                                    team@vamarinc.com
                                </h4>
                            </div>
                        </div>
                </header>

                <header className='border-t border-gray-700 w-[95%] xl:w-[62%] h-[15%] py-5 px-2 xl:px-0 flex justify-center items-center'>
                    <p className='text-gray-400 font-medium text-sm'>© 2020 GOLDEN BELL EXPRESS</p>
                </header>

            </section>
        </>
    )
}

export default FooterPage