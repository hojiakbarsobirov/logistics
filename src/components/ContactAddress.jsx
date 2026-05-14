import React from 'react'

const ContactAddress = () => {
    const contactInfo = [
        {
            icon: "/location-red.png",
            title: "Our Address",
            content: "р-н, 100011, г, Ул. Навои 2/2, Tashkent",
        },
        {
            icon: "/phone-call.png",
            title: "Phone Number",
            content: "+998 (97) 776-44-44",
        },
        {
            icon: "/mail.png",
            title: "Email Address",
            content: "goldenbellexpress@gmail.com",
        },
        {
            icon: "/clock.png",
            title: "Working Hours",
            content: "12:00 AM - 12:00 PM, Mon - Sat",
        }
    ]

    return (
        <div className='space-y-16'>
            {/* Sarlavha qismi */}
            <section className='w-full space-y-6'>
                <div className='flex items-center gap-3'>
                    <span className='w-10 h-[2px] bg-red-600'></span>
                    <h4 className='text-red-600 font-bold uppercase tracking-widest text-sm'>Need Help?</h4>
                </div>
                
                <div className='flex flex-col lg:flex-row justify-between gap-8 items-start'>
                    <h2 className='font-black text-4xl md:text-6xl text-slate-900 lg:w-1/2 leading-tight'>
                        Our Office <span className='text-red-600 italic'>Location</span>
                    </h2>
                    <p className='text-gray-500 text-lg lg:w-1/2 leading-relaxed'>
                        We are strategically located to serve our clients better. Visit our office for 
                        personalized consultations regarding your logistics and cargo needs. 
                        Our team is always ready to assist you.
                    </p>
                </div>
            </section>

            {/* Xarita va Ma'lumotlar bloki */}
            <section className='w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row'>
                
                {/* Google Maps qismi */}
                <div className="w-full lg:w-1/2 h-[450px] relative grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.1114428459663!2d69.2665702696611!3d41.320919105407526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b749be55555%3A0x8f175b2cc3e05537!2sStarex!5e0!3m2!1sen!2s!4v1753788225990!5m2!1sen!2s"
                        className='w-full h-full'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bizning joylashuvimiz"
                    ></iframe>
                </div>

                {/* Kontakt ma'lumotlari qismi */}
                <div className='w-full lg:w-1/2 bg-slate-900 p-8 md:p-14 flex flex-col justify-center gap-8'>
                    {contactInfo.map((info, index) => (
                        <div key={index} className='flex items-start gap-6 group'>
                            <div className='bg-red-600/10 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300'>
                                <img className='w-6 h-6 invert group-hover:invert-0' src={info.icon} alt={info.title} />
                            </div>
                            <div className='space-y-1'>
                                <h5 className='text-red-500 font-bold text-sm uppercase tracking-wider'>{info.title}</h5>
                                <p className='text-white text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity'>
                                    {info.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default ContactAddress