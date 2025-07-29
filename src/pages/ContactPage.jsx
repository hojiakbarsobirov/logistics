import React from 'react'
import NavbarPage from '../components/NavbarPage'
import ContactBanner from '../components/ContactBanner'
import ContactAddress from '../components/ContactAddress'
import FooterPage from '../components/FooterPage'
import ContactFormPage from '../components/ContactFormPage'

const ContactPage = () => {
    return (
        <>
        <NavbarPage/>
        <ContactBanner/>
            <section className=' w-full h-auto flex justify-center'>
                <header className='w-[95%] xl:w-[62%] h-auto py-10'>
                    <ContactAddress/>
                    <ContactFormPage/>
                </header>
            </section>
            <FooterPage/>
        </>
    )
}

export default ContactPage