import React, { useRef, useState } from 'react'
import AxiosInstance from '../AxiosInstance'

const ContactFormPage = () => {
    const nameRef = useRef("")
    const phoneRef = useRef("")
    const messageRef = useRef("")
    const checkboxRef = useRef(null)

    const [isValid, setIsValid] = useState(false)

    const handleInput = () => {
        const isFilled =
            nameRef.current.value.trim() !== "" &&
            phoneRef.current.value.trim() !== "" &&
            messageRef.current.value.trim() !== ""

        setIsValid(isFilled)
    }

    const createData = async (e) => {
        e.preventDefault()

        if (!isValid) {
            alert("Iltimos, barcha maydonlarni to‘ldiring!")
            return
        }

        const newData = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            message: messageRef.current.value
        }

        try {
            await AxiosInstance.post('example', newData)
            alert("Xabar yuborildi!")

            // 🔽 Inputlarni tozalash
            nameRef.current.value = ""
            phoneRef.current.value = ""
            messageRef.current.value = ""
            if (checkboxRef.current) checkboxRef.current.checked = false

            // 🔽 Tugma holatini o'chirish
            setIsValid(false)
        } catch (err) {
            alert("Xatolik yuz berdi!")
        }
    }

    return (
        <section className='w-full h-auto my-10 gap-10 flex flex-col xl:flex-row justify-center items-center'>

            {/* Chap qism */}
            <div className='w-full xl:w-[50%] flex flex-col gap-6'>
                <h4 className='text-red-600 font-medium text-xl'>Contact Form</h4>
                <h3 className='font-bold text-3xl xl:text-6xl'>Call Us Or Fill The Form</h3>

                <div className='shadow-lg rounded-lg flex gap-6 items-center p-5'>
                    <div className='bg-red-600 w-[80px] h-[80px] flex justify-center items-center rounded-lg'>
                        <img className='w-10' src="/phone-white.png" alt="phone" />
                    </div>
                    <div>
                        <h4 className='font-medium text-xl'>+998 (97) 776-44-44</h4>
                        <p className='text-gray-500'>Don't hesitate to contact us!</p>
                    </div>
                </div>

                <div className='shadow-lg rounded-lg flex gap-6 items-center p-5'>
                    <div className='bg-red-600 w-[80px] h-[80px] flex justify-center items-center rounded-lg'>
                        <img className='w-10' src="/location-white.png" alt="location" />
                    </div>
                    <div>
                        <h4 className='font-medium text-xl'>Office Location</h4>
                        <p className='text-gray-500'>р-н, 100011, г, Ул.Навои 2/2, Tashkent</p>
                    </div>
                </div>

                <div className='shadow-lg rounded-lg flex gap-6 items-center p-5'>
                    <div className='bg-red-600 w-[80px] h-[80px] flex justify-center items-center rounded-lg'>
                        <img className='w-10' src="/clock-white.png" alt="clock" />
                    </div>
                    <div>
                        <h4 className='font-medium text-xl'>Working Time</h4>
                        <p className='text-gray-500'>12:00 AM - 12:00 PM Monday - Saturday</p>
                    </div>
                </div>
            </div>

            {/* O'ng qism - Forma */}
            <div className='py-10 w-full xl:w-[50%] h-[650px] flex flex-col justify-between'>
                <h4 className='font-medium text-3xl'>Leave Your Message Here</h4>
                <form onSubmit={createData} className='w-full h-[500px] flex flex-col gap-3'>

                    <label className='text-gray-500'>Name</label>
                    <input
                        ref={nameRef}
                        onChange={handleInput}
                        className='w-full h-10 pl-4 border rounded'
                        type="text"
                        placeholder='Name'
                    />

                    <label className='text-gray-500'>Phone</label>
                    <input
                        ref={phoneRef}
                        onChange={handleInput}
                        className='w-full h-10 pl-4 border rounded'
                        type="text"
                        placeholder='Phone'
                    />

                    <label className='text-gray-500'>Message</label>
                    <textarea
                        ref={messageRef}
                        onChange={handleInput}
                        className='w-full h-[200px] pl-4 pt-2 border rounded'
                        placeholder='Message'
                    />

                    <button
                        type='submit'
                        disabled={!isValid}
                        className={`text-white font-medium w-full h-14 rounded-md transition ease-in-out ${
                            isValid ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 cursor-not-allowed'
                        }`}
                    >
                        Send
                    </button>
                </form>

                <p className='text-sm mt-4'>
                    <input ref={checkboxRef} type="checkbox" /> By checking this box, I agree to receive SMS...
                </p>
            </div>
        </section>
    )
}

export default ContactFormPage
