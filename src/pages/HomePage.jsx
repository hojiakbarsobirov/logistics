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
        <main className="bg-white selection:bg-red-500 selection:text-white">
            {/* Navigatsiya qismi */}
            <NavbarPage />

            {/* Asosiy kirish qismi */}
            <BannerPage />

            {/* Ma'lumot va Biz haqimizda (Konteyner ichida) */}
            <section className="relative">
                <div className="container mx-auto">
                    {/* InformationPage banner ustiga chiqib turishi uchun uning ichida -mt-12 ishlatganmiz */}
                    <InformationPage />
                    <AboutSection />
                </div>
            </section>

            {/* To'liq kenglikdagi reklama bloki */}
            <LogisticsSolutions />

            {/* Xizmatlar va Yangiliklar qismi */}
            <section className="bg-slate-50/30 py-10 lg:py-20">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="space-y-24"> {/* Bo'limlar orasidagi masofani bir xil saqlash uchun */}
                        <OurService />
                        <ExpressAbout />
                        <LogisticNews />
                    </div>
                </div>
            </section>

            {/* Sayt yakuni */}
            <FooterPage />
        </main>
    )
}

export default HomePage