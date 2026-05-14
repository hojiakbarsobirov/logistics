import React from 'react'
import NavbarPage from '../components/NavbarPage'
import AboutBanner from '../components/AboutBanner'
import AboutComponents from '../components/AboutComponents'
import AboutExport from '../components/AboutExport'
import FooterPage from '../components/FooterPage'

const AboutPage = () => {
    return (
        <main className="w-full bg-white selection:bg-red-500 selection:text-white">
            {/* Navigatsiya */}
            <NavbarPage />

            {/* About Sahifasi uchun Banner (Sarlavha qismi) */}
            <AboutBanner />

            {/* Asosiy Ma'lumotlar Qismi */}
            <section className="w-full py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-0">
                    {/* Markazlashtirilgan konteyner (Sizning xl:w-[62%] uslubingizda) */}
                    <div className="max-w-[1200px] mx-auto">
                        <AboutComponents />
                    </div>
                </div>
            </section>

            {/* Eksport yoki Maxsus Xizmatlar bloki (Full width rasm bo'lishi mumkin) */}
            <AboutExport />

            {/* Pastki qism */}
            <FooterPage />
        </main>
    )
}

export default AboutPage