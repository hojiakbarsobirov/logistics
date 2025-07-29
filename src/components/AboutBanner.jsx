import React from 'react'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
  return (
    <>
        <section className='bg-[url("/about-banner.jpg")] bg-cover bg-center bg-no-repeat w-full h-[55vh]'>
            <div className='bg-black w-full h-full bg-opacity-45 flex flex-col justify-center gap-6 xl:gap-10 items-center'>
                <h3 className='text-white font-bold text-6xl'>About Us</h3>
                <div>
                    <p className='font-medium text-white text-2xl hover:text-red-600 transition ease-in-out'><Link to={'/'}>Home /</Link></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBanner