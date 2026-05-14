import React from 'react'
import { FileText } from 'lucide-react'

const PrivacyBanner = () => {
  return (
    <section className='w-full bg-slate-900 py-20 lg:py-28 relative overflow-hidden'>
      {/* Dekorativ effektlar */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]'></div>
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]'></div>

      <div className='max-w-6xl mx-auto px-6 relative z-10 text-center'>
        <div className='inline-flex p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-6'>
          <FileText className='text-red-500' size={32} />
        </div>
        <h1 className='text-4xl md:text-6xl font-black text-white tracking-tight'>
          Maxfiylik <span className='text-red-600'>Siyosati</span>
        </h1>
        <p className='text-slate-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
          Sizning ma'lumotlaringiz xavfsizligi biz uchun ustuvor vazifa. Quyida ma'lumotlar qanday yig'ilishi va himoya qilinishi haqida batafsil tanishishingiz mumkin.
        </p>
      </div>
    </section>
  )
}

export default PrivacyBanner