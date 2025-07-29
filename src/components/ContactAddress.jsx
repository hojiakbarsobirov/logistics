import React from 'react'

const ContactAddress = () => {
    return (
        <>
            <section className='w-full h-auto py-2 flex flex-col gap-8'>
                <h4 className='text-red-600 font-medium text-xl'>Need Help ?</h4>
                <h3 className='font-bold text-5xl'>Our Office Location</h3>
                <div className='w-full flex flex-col xl:flex-row gap-5 items-center'>
                    <p className='text-gray-500'>Duis et nibh blat, eifend liberost amet, suscipit enim. Sed rutrum posuerercis pohasellus curs our tinnt nulla, ut ttis augue finibus.</p>
                    <p className='text-gray-500'>Estibulum vitae fringilla in, rhoncus luctus ante. Integer porttitor fringillaseru vestibulum. Phasellus curs our tinnt nulla, ut ttis augue finibus ac. </p>
                </div>
            </section>

            <section className=' w-full border rounded-md h-auto flex flex-col xl:flex-row justify-center items-center'>
                <div className="w-full xl:w-[50%] max-w-4xl h-[400px]  border-gray-300  overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.1114428459663!2d69.2665702696611!3d41.320919105407526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b749be55555%3A0x8f175b2cc3e05537!2sStarex!5e0!3m2!1sen!2s!4v1753788225990!5m2!1sen!2s"
                        className='w-[100%] h-[100%]'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bizning joylashuvimiz"
                    ></iframe>
                </div>

                <div className=' w-full xl:w-[50%] h-[400px] flex flex-col justify-center gap-5 items-start px-14'>

                    <div className='flex items-center gap-6'>
                        <img className='w-5' src="/location-red.png" alt="" />
                        <p>р-н, 100011, г, Ул.Навои 2/2, Tashkent</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <img className='w-5' src="/phone-call.png" alt="" />
                        <p>+998 (97) 776-44-44</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <img className='w-5' src="/mail.png" alt="" />
                        <p>goldenbellexpress@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <img className='w-5' src="/clock.png" alt="" />
                        <p>12:00 AM - 12:00 PM Monday - Saturday</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactAddress