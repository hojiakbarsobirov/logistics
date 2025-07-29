import React from 'react'

const ContactFormPage = () => {
    return (
        <>
            <section className=' w-full h-auto my-10 gap-10 flex flex-col xl:flex-row justify-center items-center'>

                <div className='w-full xl:w-[50%] h-auto flex flex-col justify-between items-start'>
                    <h4 className='text-red-600 font-medium text-xl mb-4'>Contact Form</h4>
                    <h3 className='font-bold text-3xl xl:text-6xl mb-4'>Call Us Or Fill The Form</h3>

                    <div className='w-full h-auto rounded-lg shadow-lg gap-6 flex flex-col xl:flex-row items-center p-5'>
                        <div className='bg-red-600 w-[80px] h-[80px] rounded-lg flex justify-center items-center'>
                            <img className='w-10' src="/phone-white.png" alt="" />
                        </div>

                        <div>
                            <h4 className='font-medium text-xl text-center xl:text-start'>+998 (97) 776-44-44</h4>
                            <p className='text-gray-500 text-center xl:text-start'>Don't hesitate to contact us!</p>
                        </div>
                    </div>

                    <div className='w-full h-auto rounded-lg shadow-lg gap-6 flex flex-col xl:flex-row items-center p-5'>
                        <div className='bg-red-600 w-[80px] h-[80px] rounded-lg flex justify-center items-center'>
                            <img className='w-10' src="/location-white.png" alt="" />
                        </div>

                        <div>
                            <h4 className='font-medium text-xl text-center xl:text-start'>Office Location</h4>
                            <p className='text-gray-500 text-center xl:text-start'>р-н, 100011, г, Ул.Навои 2/2, Tashkent</p>
                        </div>
                    </div>

                    <div className='w-full h-auto rounded-lg shadow-lg gap-6 flex flex-col xl:flex-row items-center p-5'>
                        <div className='bg-red-600 w-[80px] h-[80px] rounded-lg flex justify-center items-center'>
                            <img className='w-10' src="/clock-white.png" alt="" />
                        </div>

                        <div>
                            <h4 className='font-medium text-xl text-center xl:text-start'>Working Time</h4>
                            <p className='text-gray-500 text-center xl:text-start'>12:00 AM - 12:00 PM Monday - Saturday</p>
                        </div>
                    </div>

                </div>

                <div className=' py-10 w-full xl:w-[50%] h-[650px] flex flex-col justify-between items-start'>
                    <h4 className='font-medium text-3xl'>Leave Your Message Here</h4>
                    <form className='w-full h-[500px]'>
                        <label className='text-gray-500'>Name</label>
                        <input className='w-full h-10 pl-4 border rounded' type="text" placeholder='Name' />

                        <label className='text-gray-500'>Phone</label>
                        <input className='w-full h-10 pl-4 border rounded' type="number" placeholder='Phone' />

                        <label className='text-gray-500'>Message</label>
                        <textarea placeholder='Message' className='w-full h-[200px] border rounded pl-4'></textarea>

                        <button className='text-white font-medium bg-red-600 focus:scale-95 transition ease-in-out w-full h-14 rounded-md'>Send</button>
                    </form>
                    <p className='text-sm mt-5 xl:mt-2'> <input type="checkbox" name="" id="" /> By checking this box, I agree to receive SMS messages about customer services from Vamar Inc at the phone number provided above. The SMS frequency may vary. Data rates may apply. Text HELP to 1-(630) 300-0338 for assistance. Reply STOP to opt out of receiving SMS messages. This is my privacy policy.</p>
                </div>

            </section>
        </>
    )
}

export default ContactFormPage