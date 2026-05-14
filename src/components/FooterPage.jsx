import React from 'react'

const FooterPage = () => {
    return (
        <footer className='bg-[#050b1a] w-full pt-16 pb-8'>
            <div className='container mx-auto px-6'>
                
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-gray-800'>
                    
                    {/* Brand Section */}
                    <div className='space-y-6'>
                        <img className='w-44 mb-6' src="/navbar-logo.png" alt="Golden Bell Logo" />
                        <p className='text-gray-400 leading-relaxed text-sm md:text-base'>
                            Golden Bell Express is a leading logistics operator providing a full range of services 
                            in the sphere of customs cargo and global transportation worldwide.
                        </p>
                        {/* Social Media Placeholder (optional but recommended) */}
                        <div className='flex gap-4 pt-2'>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className='w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 transition-colors cursor-pointer'></div>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className='lg:pl-12'>
                        <h4 className='font-bold text-white text-xl mb-8 relative inline-block'>
                            Company
                            <span className='absolute -bottom-2 left-0 w-8 h-1 bg-red-600'></span>
                        </h4>
                        <ul className='space-y-4'>
                            {['Home', 'About Us', 'Contact', 'Privacy Policy'].map((item) => (
                                <li key={item} className='group flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer'>
                                    <span className='text-red-600 mr-2 group-hover:translate-x-1 transition-transform'>→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className='font-bold text-white text-xl mb-8 relative inline-block'>
                            Quick Contact
                            <span className='absolute -bottom-2 left-0 w-8 h-1 bg-red-600'></span>
                        </h4>
                        <div className='space-y-5'>
                            <div className='flex items-start gap-4 group'>
                                <div className='bg-gray-800 p-2 rounded group-hover:bg-red-600 transition-colors'>
                                    <img className='w-4 h-4 invert' src="/location-icons.png" alt="" />
                                </div>
                                <span className='text-gray-400 text-sm'>1800 W Hawthorne Ln, West Chicago, Illinois 60185</span>
                            </div>
                            
                            <div className='flex items-center gap-4 group'>
                                <div className='bg-gray-800 p-2 rounded group-hover:bg-red-600 transition-colors'>
                                    <img className='w-4 h-4 invert' src="/phone-icons.png" alt="" />
                                </div>
                                <span className='text-gray-400 text-sm'>(630) 300-0338</span>
                            </div>

                            <div className='flex items-center gap-4 group'>
                                <div className='bg-gray-800 p-2 rounded group-hover:bg-red-600 transition-colors'>
                                    <img className='w-4 h-4 invert' src="/email-icons.png" alt="" />
                                </div>
                                <span className='text-gray-400 text-sm'>team@vamarinc.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500 text-sm'>
                        © {new Date().getFullYear()} <span className='text-white font-semibold'>GOLDEN BELL EXPRESS</span>. All Rights Reserved.
                    </p>
                    <div className='flex gap-6 text-xs text-gray-500 uppercase tracking-widest'>
                        <span className='hover:text-red-500 cursor-pointer'>Terms</span>
                        <span className='hover:text-red-500 cursor-pointer'>Sitemap</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default FooterPage