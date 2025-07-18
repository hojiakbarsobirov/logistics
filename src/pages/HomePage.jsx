import React from 'react'
import NavbarPage from '../components/NavbarPage'
import BannerPage from '../components/BannerPage'
import InformationPage from '../components/InformationPage'

const HomePage = () => {
    return (
        <>
            <NavbarPage />
            <BannerPage/>
            <section className=' w-full h-auto flex justify-center'>
                <header className='shadow-md w-[95%] xl:w-[62%] h-[200vh]'>
                    <InformationPage/>
                </header>
            </section>
        </>
    )
}

export default HomePage