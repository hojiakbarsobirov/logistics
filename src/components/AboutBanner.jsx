import React from 'react'

const AboutBanner = () => {
  return (
    <>
        <section className='bg-[url("/about-banner.jpg")] bg-cover bg-center bg-no-repeat w-full h-[55vh]'>
            <div className='bg-black w-full h-full bg-opacity-45 flex flex-col justify-center items-center'>
                <h3 className='text-white font-bold text-6xl'>About Us</h3>
                <div>
                    <p className='font-medium text-white text-3xl'>Home </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBanner