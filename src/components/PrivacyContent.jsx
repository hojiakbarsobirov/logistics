import React from 'react'
import { ShieldCheck, Lock, EyeOff, Mail } from 'lucide-react'

const PrivacyContent = () => {
    const lastUpdated = "14-May, 2026"
    
    const sections = [
        {
            icon: ShieldCheck,
            title: "Ma'lumotlar yig'ilishi",
            content: "Biz faqat siz ixtiyoriy ravishda aloqa formasi orqali yuborgan ma'lumotlarni (ism, telefon raqami, xabar mazmuni) yig'amiz. Bu ma'lumotlar siz bilan bog'lanish uchun ishlatiladi."
        },
        {
            icon: Lock,
            title: "Xavfsizlik choralari",
            content: "Sizning shaxsiy ma'lumotlaringiz ruxsatsiz kirishdan himoyalangan serverlarda saqlanadi. Biz SSL shifrlash va zamonaviy xavfsizlik protokollaridan foydalanamiz."
        },
        {
            icon: EyeOff,
            title: "Ma'lumotlar maxfiyligi",
            content: "Biz sizning ma'lumotlaringizni uchinchi shaxslarga sotmaymiz. Ma'lumotlar faqat siz so'ragan xizmatni ko'rsatish maqsadidagina foydalaniladi."
        }
    ]

    return (
        <section className='max-w-5xl mx-auto px-6 py-16'>
            <div className='bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-16 -mt-24 relative z-20'>
                <div className='flex justify-between items-center mb-12 border-b border-slate-50 pb-8'>
                    <span className='text-slate-400 text-xs font-bold uppercase tracking-widest'>Privacy & Terms</span>
                    <span className='text-slate-400 text-xs'>Yangilangan: {lastUpdated}</span>
                </div>

                <div className='grid gap-12'>
                    {sections.map((item, i) => (
                        <div key={i} className='group flex flex-col md:flex-row gap-6 items-start'>
                            <div className='bg-red-50 p-4 rounded-2xl shrink-0 group-hover:bg-red-600 transition-colors duration-500'>
                                <item.icon className='text-red-600 group-hover:text-white transition-colors' size={28} />
                            </div>
                            <div className='space-y-3'>
                                <h3 className='text-2xl font-bold text-slate-900'>{item.title}</h3>
                                <p className='text-slate-600 leading-relaxed text-base'>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Box */}
                <div className='mt-16 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div>
                        <h4 className='font-bold text-slate-900 text-lg'>Savollaringiz bormi?</h4>
                        <p className='text-slate-500 text-sm'>Maxfiylik masalalari bo'yicha bizga yozing.</p>
                    </div>
                    <a href="mailto:support@example.com" className='flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 hover:border-red-600 transition-all font-bold text-slate-900'>
                        <Mail size={18} className='text-red-600' />
                        support@example.com
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PrivacyContent