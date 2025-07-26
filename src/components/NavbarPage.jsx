import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top Header */}
            <section className='shadow-md w-full h-auto py-2 px-4 xl:px-0 flex flex-col-reverse xl:flex-row justify-evenly items-start xl:items-center bg-white'>
                <img className='w-36' src="/navbar-logo.png" alt="Logo" />

                <div className='flex flex-col xl:flex-row items-end xl:items-center gap-4'>
                    <div className='flex items-center gap-4 xl:gap-6'>
                        <div className='flex items-center gap-2'>
                            <img className='w-4 xl:w-5' src="/call.png" alt="call" />
                            <p className='text-gray-500 text-sm xl:text-lg'>+998 (98) 999-99-99</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img className='w-4 xl:w-5' src="/email.png" alt="email" />
                            <p className='text-gray-500 text-sm xl:text-lg'>goldenbellexpress@gmail.com</p>
                        </div>
                    </div>

                    <button className='bg-transparent px-6 py-2 text-red-600 border border-red-600 rounded-md font-medium hover:bg-red-600 hover:text-white transition'>
                        Get A Free Quote
                    </button>
                </div>
            </section>

            {/* Main Navbar */}
            <nav className='relative w-full py-3 px-4 xl:px-0 flex justify-around items-center shadow-md border bg-white'>

                {/* Desktop Menu */}
                <ul className='hidden xl:flex font-medium items-center gap-6'>
                    <li className="hover:text-red-600 cursor-pointer"><Link to={'/'}>Home</Link></li>
                    <li className="hover:text-red-600 cursor-pointer"><Link to={'/about-page'}>About us</Link></li>
                    <li className="hover:text-red-600 cursor-pointer">Contact</li>
                    <li className="hover:text-red-600 cursor-pointer">Privacy Policy</li>
                </ul>

                {/* Desktop Socials */}
                <div className='hidden xl:flex items-center gap-4'>
                    <img className='w-5 cursor-pointer hover:opacity-80' src="/facebook-icons.png" alt="facebook" />
                    <img className='w-5 cursor-pointer hover:opacity-80' src="/instagram.png" alt="instagram" />
                    <img className='w-5 cursor-pointer hover:opacity-80' src="/linkedin.png" alt="linkedin" />
                </div>

                {/* Mobile Burger Menu */}
                <div
                    className='xl:hidden flex flex-col gap-1 cursor-pointer z-50'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>

                {/* Mobile Menu */}
                <div className={`absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-6 font-medium shadow-md transition-all ease-in-out duration-500 z-40 ${menuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <Link className="hover:text-red-600" to={'/'}>Home</Link>
                    <Link className="hover:text-red-600" to={'/about-page'}>About us</Link>
                    <a className="hover:text-red-600" href="#">Contact</a>
                    <a className="hover:text-red-600" href="#">Privacy Policy</a>

                    <div className='flex gap-4 mt-4'>
                        <img className='w-5' src="/facebook-icons.png" alt="facebook" />
                        <img className='w-5' src="/instagram.png" alt="instagram" />
                        <img className='w-5' src="/linkedin.png" alt="linkedin" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarPage;
