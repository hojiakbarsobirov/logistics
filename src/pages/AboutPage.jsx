import React from 'react'
import NavbarPage from '../components/NavbarPage'
import AboutBanner from '../components/AboutBanner'

const AboutPage = () => {
    return (
        <>
            <NavbarPage />
            <AboutBanner/>
            <section className=' w-full h-auto flex justify-center'>
                <header className='shadow-md w-[95%] xl:w-[62%] h-[200vh]'></header>
            </section>
        </>
    )
}

export default AboutPage