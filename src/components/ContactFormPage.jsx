import React, { useRef, useState } from 'react'
import AxiosInstance from '../AxiosInstance'
import { Phone, MapPin, Clock, Send } from 'lucide-react' // lucide-react ishlatish tavsiya etiladi

const ContactFormPage = () => {
    const formRef = useRef(null)
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)

    // Formadagi barcha inputlarni tekshirish
    const handleInput = () => {
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData.entries())
        const isFilled = Object.values(data).every(value => value.trim() !== "")
        setIsValid(isFilled)
    }

    const createData = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        const formData = new FormData(formRef.current)
        const payload = Object.fromEntries(formData.entries())

        try {
            await AxiosInstance.post('messages', payload)
            alert("Xabaringiz muvaffaqiyatli yuborildi! ✅")
            formRef.current.reset()
            setIsValid(false)
        } catch (err) {
            alert("Xatolik! Qaytadan urinib ko'ring.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='max-w-6xl mx-auto px-4 py-20 font-sans'>
            <div className='flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100'>
                
                {/* Chap qism: Kontakt Ma'lumotlari */}
                <div className='lg:w-2/5 bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-between'>
                    <div className='space-y-6'>
                        <div>
                            <span className='text-red-500 font-bold tracking-widest text-xs uppercase'>Contact Us</span>
                            <h2 className='text-3xl lg:text-4xl font-bold mt-2'>Let's Start a Conversation</h2>
                            <p className='text-slate-400 mt-4 text-sm leading-relaxed'>
                                Have a question or just want to say hi? We'd love to hear from you.
                            </p>
                        </div>

                        <div className='space-y-6 pt-8'>
                            {[
                                { Icon: Phone, title: "Call us", val: "+998 (97) 776-44-44" },
                                { Icon: MapPin, title: "Location", val: "Navoi 2/2, Tashkent" },
                                { Icon: Clock, title: "Hours", val: "Mon - Sat, 9:00 - 18:00" }
                            ].map((item, i) => (
                                <div key={i} className='flex items-start gap-4 group cursor-default'>
                                    <div className='bg-slate-800 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300'>
                                        <item.Icon size={18} className='text-red-500 group-hover:text-white' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-slate-500 font-medium uppercase'>{item.title}</p>
                                        <p className='text-sm font-semibold mt-1'>{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='pt-12 lg:pt-0'>
                        <div className='flex gap-4'>
                            {['fb', 'tw', 'in'].map(social => (
                                <div key={social} className='w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:bg-white hover:text-slate-900 transition-all cursor-pointer'>
                                    {social.toUpperCase()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* O'ng qism: Forma */}
                <div className='lg:w-3/5 p-8 lg:p-12'>
                    <form ref={formRef} onSubmit={createData} onChange={handleInput} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='text-xs font-bold text-slate-500 uppercase ml-1'>Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder='John Doe'
                                    className='w-full bg-slate-50 h-12 px-5 rounded-xl border border-slate-100 focus:border-red-600 focus:bg-white outline-none transition-all text-sm'
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-xs font-bold text-slate-500 uppercase ml-1'>Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder='+998'
                                    className='w-full bg-slate-50 h-12 px-5 rounded-xl border border-slate-100 focus:border-red-600 focus:bg-white outline-none transition-all text-sm'
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-xs font-bold text-slate-500 uppercase ml-1'>Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder='Tell us about your project...'
                                className='w-full bg-slate-50 p-5 rounded-xl border border-slate-100 focus:border-red-600 focus:bg-white outline-none transition-all text-sm resize-none'
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={!isValid || loading}
                            className={`flex items-center justify-center gap-2 w-full h-14 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                                isValid && !loading 
                                ? 'bg-red-600 text-white shadow-lg shadow-red-200 hover:-translate-y-1 active:scale-95' 
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                        >
                            {loading ? "SENDING..." : <><Send size={16} /> SEND MESSAGE</>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactFormPage