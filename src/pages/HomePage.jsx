import React from 'react'
import NavbarPage from '../components/NavbarPage'
import BannerPage from '../components/BannerPage'
import InformationPage from '../components/InformationPage'
import AboutSection from '../components/AboutSection'
import LogisticsSolutions from '../components/LogisticsSolutions'
import OurService from '../components/OurService'
import ExpressAbout from '../components/ExpressAbout'
import LogisticNews from '../components/LogisticNews'
import FooterPage from '../components/FooterPage'

const HomePage = () => {
    return (
        <>
            <NavbarPage />
            <BannerPage />
            <section className=' w-full h-auto flex justify-center'>
                <header className=' w-[95%] xl:w-[62%] h-auto py-5 px-2 xl:px-0'>
                    <InformationPage />
                    <AboutSection />
                </header>
            </section>
            <LogisticsSolutions />
            <section className=' w-full h-auto flex justify-center'>
                <header className=' w-[95%] xl:w-[62%] h-auto py-5 px-2 xl:px-0'>
                    <OurService/>
                    <ExpressAbout/>
                    <LogisticNews/>
                </header>
            </section>
            <FooterPage/>
        </>
    )
}

export default HomePage