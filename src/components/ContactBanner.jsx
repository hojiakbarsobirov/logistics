import React from 'react'
import { Link } from 'react-router-dom'

const ContactBanner = () => {
  return (
    <>
        <section className='bg-[url("/contact-banner.jpg")] w-full h-[50vh] bg-cover bg-center bg-no-repeat'>
            <header className='bg-black w-full h-full bg-opacity-45 flex flex-col gap-5 xl:gap-8 justify-center items-center'>
                <h4 className='font-bold text-6xl text-white'>Contact</h4>
                <span className='text-white font-medium text-xl hover:text-red-600 transition ease-in-out'><Link to={'/'}>Home /</Link></span>
            </header>
        </section>
    </>
  )
}

export default ContactBanner