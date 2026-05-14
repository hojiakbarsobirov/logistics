import React from 'react'
import NavbarPage from '../components/NavbarPage'
import ContactBanner from '../components/ContactBanner'
import ContactAddress from '../components/ContactAddress'
import ContactFormPage from '../components/ContactFormPage'
import FooterPage from '../components/FooterPage'

const ContactPage = () => {
    return (
        <main className="w-full bg-white selection:bg-red-500 selection:text-white">
            {/* Navigatsiya */}
            <NavbarPage />

            {/* Contact Banner (Sarlavha va Breadcrumb) */}
            <ContactBanner />

            {/* Asosiy aloqa bo'limi */}
            <section className="w-full py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-0">
                    {/* Markaziy konteyner: Ma'lumotlar va Forma uchun */}
                    <div className="max-w-[1200px] mx-auto space-y-20">
                        
                        {/* Manzillar, Telefonlar va Email (Grid ko'rinishida bo'ladi) */}
                        <ContactAddress />

                        {/* Xarita va Aloqa Formasi bo'limi */}
                        <div className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-100 shadow-sm">
                            <ContactFormPage />
                        </div>

                    </div>
                </div>
            </section>

            {/* Sayt yakuni */}
            <FooterPage />
        </main>
    )
}

export default ContactPage