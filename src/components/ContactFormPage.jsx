import React, { useRef, useState } from 'react'
import AxiosInstance from '../AxiosInstance'
import { Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

const ContactFormPage = () => {
    const formRef = useRef(null)
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleInput = () => {
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData.entries())
        const isFilled = data.name?.trim().length > 2 && 
                         data.phone?.trim().length > 8 && 
                         data.message?.trim().length > 5
        setIsValid(isFilled)
    }

    const createData = async (e) => {
        e.preventDefault()
        if (!isValid || loading) return
        setLoading(true)

        try {
            const formData = new FormData(formRef.current)
            const payload = Object.fromEntries(formData.entries())
            await AxiosInstance.post('messages', payload)
            alert("Xabaringiz muvaffaqiyatli yuborildi! ✅")
            formRef.current.reset()
            setIsValid(false)
        } catch (err) {
            alert("Xatolik yuz berdi.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='min-h-screen bg-white md:bg-slate-50 flex items-stretch md:items-center justify-center font-sans'>
            {/* Konteyner: Mobilda h-full va w-full, Desktopda max-w-6xl */}
            <div className='w-full md:max-w-7xl md:px-4 md:py-10 lg:px-8'>
                
                <div className='flex flex-col lg:flex-row min-h-screen md:min-h-0 bg-white md:rounded-[3rem] overflow-hidden md:shadow-2xl border-none md:border md:border-white'>
                    
                    {/* INFO BLOCK: Mobilda tepada, Desktopda chapda */}
                    <div className='w-full lg:w-[40%] bg-[#0B1120] p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden'>
                        {/* Decorative Background Blur */}
                        <div className='absolute -top-20 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-[100px]'></div>
                        <div className='absolute bottom-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]'></div>
                        
                        <div className='relative z-10'>
                            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8'>
                                <span className='w-2 h-2 rounded-full bg-red-500 animate-ping'></span>
                                <span className='text-[10px] uppercase font-black tracking-[0.2em] text-red-500'>Aloqa Markazi</span>
                            </div>
                            
                            <h2 className='text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6'>
                                Loyihangizni <br/> 
                                <span className='text-red-500'>birga quramiz</span>
                            </h2>
                            <p className='text-slate-400 text-lg font-medium leading-relaxed mb-10'>
                                Savollaringiz bormi? Bizga yozing va 24 soat ichida javob oling.
                            </p>

                            <div className='space-y-6 md:space-y-8'>
                                {[
                                    { Icon: Phone, label: "Telefon", val: "+998 97 776 44 44" },
                                    { Icon: MessageSquare, label: "Telegram", val: "@hojiakbar_codes" },
                                    { Icon: MapPin, label: "Manzil", val: "Toshkent, Navoiy 2/2" }
                                ].map((item, i) => (
                                    <div key={i} className='flex items-center gap-5 group cursor-pointer'>
                                        <div className='w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600 transition-all duration-300'>
                                            <item.Icon size={22} className='text-red-500 group-hover:text-white transition-colors' />
                                        </div>
                                        <div>
                                            <p className='text-[10px] text-slate-500 uppercase font-bold tracking-widest'>{item.label}</p>
                                            <p className='text-lg font-semibold'>{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='mt-12 lg:mt-0 relative z-10'>
                            <div className='flex gap-5'>
                                {['Instagram', 'Telegram', 'YouTube'].map(s => (
                                    <span key={s} className='text-xs font-bold text-slate-500 hover:text-white transition-colors cursor-pointer uppercase tracking-widest'>
                                        {s.substring(0, 2)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FORM BLOCK: Mobilda to'liq ekran qismi */}
                    <div className='w-full lg:w-[60%] p-8 md:p-12 lg:p-20 bg-white flex flex-col justify-center'>
                        <form ref={formRef} onSubmit={createData} onChange={handleInput} className='space-y-6 md:space-y-8 w-full max-w-2xl mx-auto lg:mx-0'>
                            <div className='space-y-6'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
                                    <div className='group'>
                                        <label className='block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-red-600 transition-colors'>Ismingiz</label>
                                        <input 
                                            name="name" 
                                            placeholder='Hojiakbar' 
                                            className='w-full bg-slate-50 h-16 md:h-18 px-6 rounded-2xl border-2 border-transparent focus:border-red-600/10 focus:bg-white focus:ring-4 focus:ring-red-600/5 outline-none transition-all duration-300 font-semibold' 
                                        />
                                    </div>
                                    <div className='group'>
                                        <label className='block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-red-600 transition-colors'>Telefon</label>
                                        <input 
                                            name="phone" 
                                            placeholder='+998' 
                                            className='w-full bg-slate-50 h-16 md:h-18 px-6 rounded-2xl border-2 border-transparent focus:border-red-600/10 focus:bg-white focus:ring-4 focus:ring-red-600/5 outline-none transition-all duration-300 font-semibold' 
                                        />
                                    </div>
                                </div>

                                <div className='group'>
                                    <label className='block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-red-600 transition-colors'>Xabaringiz</label>
                                    <textarea 
                                        name="message" 
                                        rows="5" 
                                        placeholder='Loyihangiz haqida batafsil ma’lumot...' 
                                        className='w-full bg-slate-50 p-6 rounded-2xl border-2 border-transparent focus:border-red-600/10 focus:bg-white focus:ring-4 focus:ring-red-600/5 outline-none transition-all duration-300 font-semibold resize-none' 
                                    />
                                </div>
                            </div>

                            <button 
                                disabled={!isValid || loading} 
                                className={`w-full h-[70px] md:h-[80px] rounded-2xl font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-500 ${
                                    isValid && !loading 
                                    ? 'bg-red-600 text-white shadow-[0_20px_50px_-10px_rgba(220,38,38,0.5)] hover:-translate-y-1 active:scale-95' 
                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                }`}
                            >
                                {loading ? "Yuborilmoqda..." : (
                                    <>
                                        YUBORISH <Send size={20} />
                                    </>
                                )}
                            </button>
                            
                            <p className='text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]'>
                                Biz 1 soat ichida bog'lanamiz
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactFormPage