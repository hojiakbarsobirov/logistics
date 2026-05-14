import React, { useEffect } from 'react'
import NavbarPage from '../components/NavbarPage' // Navbar komponentini import qilamiz
import PrivacyBanner from '../components/PrivacyBanner'
import PrivacyContent from '../components/PrivacyContent'
import FooterPage from '../components/FooterPage' // Agar Footer mavjud bo'lsa

const PrivacyPolicy = () => {
  // Sahifaga kirganda eng yuqoriga chiqarish
  useEffect(() => {
    window.scrollTo(0, 0)
    // Sahifa sarlavhasini o'zgartirish (SEO uchun foydali)
    document.title = "Privacy Policy | Golden Bell Express"
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      {/* 1. Navigatsiya paneli */}
      <NavbarPage />

      <main className='flex-grow bg-slate-50 pb-20'>
        {/* 2. Yuqori qism (Header/Banner) */}
        <PrivacyBanner />

        {/* 3. Asosiy kontent bloklari */}
        <div className='relative'>
           <PrivacyContent />
        </div>

        {/* 4. Qo'shimcha huquqiy eslatma */}
        <div className='max-w-4xl mx-auto px-6 text-center mt-12'>
          <p className='text-slate-400 text-[10px] md:text-xs italic leading-relaxed border-t border-slate-200 pt-6'>
            * Ushbu hujjat "Golden Bell Express" saytidan foydalanish shartlarining ajralmas qismi hisoblanadi. 
            Ma'lumotlar xavfsizligi bo'yicha savollaringiz bo'lsa, rasmiy aloqa kanallarimiz orqali murojaat qilishingiz mumkin.
          </p>
        </div>
      </main>

      {/* 5. Footer (Agar bo'lsa, sahifa oxirida ko'rinadi) */}
      <FooterPage />
    </div>
  )
}

export default PrivacyPolicy