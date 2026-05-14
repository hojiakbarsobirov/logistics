import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about-page' },
        { label: 'Contact', to: '/contact-page' },
        { label: 'Privacy Policy', to: '/privacy' },
    ];

    const socials = [
        { src: '/facebook-icons.png', alt: 'Facebook', href: '#' },
        { src: '/instagram.png', alt: 'Instagram', href: '#' },
        { src: '/linkedin.png', alt: 'LinkedIn', href: '#' },
    ];

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <div className="font-sans">
            {/* ── TOP BAR ── */}
            <div className="bg-[#0f1114] text-[#a0aec0] text-[13px] tracking-wide px-4 sm:px-8 lg:px-20 flex justify-between items-center h-[42px] relative overflow-hidden flex-wrap gap-1.5 max-[400px]:justify-center">
                {/* subtle red gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(232,41,26,0.08)] pointer-events-none" />

                <div className="flex items-center gap-4 sm:gap-6 max-[600px]:gap-3">
                    <a
                        href="tel:+998977764444"
                        className="flex items-center gap-2 text-[#a0aec0] no-underline hover:text-white transition-colors duration-200"
                    >
                        <span className="w-1.5 h-1.5 bg-[#E8291A] rounded-full flex-shrink-0" />
                        +998 (97) 776-44-44
                    </a>
                    <a
                        href="mailto:goldenbellexpress@gmail.com"
                        className="hidden sm:flex items-center gap-2 text-[#a0aec0] no-underline hover:text-white transition-colors duration-200"
                    >
                        <span className="w-1.5 h-1.5 bg-[#E8291A] rounded-full flex-shrink-0" />
                        goldenbellexpress@gmail.com
                    </a>
                </div>

                <div className="max-[400px]:hidden">
                    <button className="bg-[#E8291A] hover:bg-[#c41f11] text-white border-none px-[18px] py-1.5 rounded text-[12px] font-semibold tracking-[0.06em] uppercase cursor-pointer transition-all duration-200 hover:-translate-y-px font-[Syne,sans-serif] whitespace-nowrap">
                        Get A Free Quote
                    </button>
                </div>
            </div>

            {/* ── MAIN NAV ── */}
            <nav
                className={`bg-white px-4 sm:px-8 lg:px-20 flex items-center justify-between h-[68px] sticky top-0 z-[1000] transition-shadow duration-200 border-b ${
                    scrolled
                        ? 'shadow-[0_4px_24px_rgba(0,0,0,0.13)] border-transparent'
                        : 'shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.07)] border-gray-200'
                }`}
            >
                {/* Logo */}
                <Link to="/" className="no-underline flex-shrink-0">
                    <img
                        src="/navbar-logo.png"
                        alt="Golden Bell Express"
                        className="h-9 w-auto block"
                        onError={e => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span
                        className="hidden font-[Syne,sans-serif] text-xl font-bold text-[#0f1114] tracking-tight"
                        style={{ display: 'none' }}
                    >
                        Golden<span className="text-[#E8291A]">Bell</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-1 list-none">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`block px-3.5 py-2 text-[14.5px] font-medium no-underline rounded-lg font-[Syne,sans-serif] tracking-[0.01em] transition-colors duration-200 relative
                                    ${isActive(link.to)
                                        ? 'text-[#E8291A]'
                                        : 'text-[#0f1114] hover:text-[#E8291A]'
                                    }`}
                            >
                                {link.label}
                                {/* Active underline indicator */}
                                <span
                                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#E8291A] rounded-sm transition-transform duration-200 origin-left
                                        ${isActive(link.to) ? 'scale-x-100' : 'scale-x-0'}`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Socials */}
                <div className="hidden lg:flex items-center gap-2.5">
                    {socials.map(s => (
                        <a
                            key={s.alt}
                            href={s.href}
                            aria-label={s.alt}
                            className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 hover:border-[#E8291A] hover:bg-[#E8291A] hover:-translate-y-0.5 group"
                        >
                            <img
                                src={s.src}
                                alt={s.alt}
                                className="w-[15px] h-[15px] object-contain brightness-[0.3] group-hover:brightness-[10] transition-all duration-200"
                            />
                        </a>
                    ))}
                </div>

                {/* Burger Button */}
                <button
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 cursor-pointer bg-transparent border-none p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-[1100]"
                >
                    <span
                        className={`block h-0.5 rounded-sm bg-[#0f1114] transition-all duration-300 ${
                            menuOpen ? 'w-[22px] translate-x-[5px] translate-y-[5px] rotate-45' : 'w-[22px]'
                        }`}
                    />
                    <span
                        className={`block h-0.5 rounded-sm bg-[#0f1114] transition-all duration-300 ${
                            menuOpen ? 'opacity-0 w-0' : 'w-4 opacity-100'
                        }`}
                    />
                    <span
                        className={`block h-0.5 rounded-sm bg-[#0f1114] transition-all duration-300 ${
                            menuOpen ? 'w-[22px] translate-x-[5px] -translate-y-[5px] -rotate-45' : 'w-[22px]'
                        }`}
                    />
                </button>
            </nav>

            {/* ── MOBILE OVERLAY ── */}
            <div
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[1040] transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* ── MOBILE DRAWER ── */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`fixed top-0 right-0 w-[min(320px,85vw)] h-screen bg-white z-[1050] flex flex-col pt-20 px-8 pb-10 shadow-[-8px_0_40px_rgba(0,0,0,0.15)] overflow-y-auto transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="list-none flex flex-col gap-0.5 flex-1">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-3 py-3.5 text-lg font-semibold no-underline font-[Syne,sans-serif] border-b border-gray-100 tracking-tight transition-all duration-200 group
                                    ${isActive(link.to)
                                        ? 'text-[#E8291A] pl-1'
                                        : 'text-[#0f1114] hover:text-[#E8291A] hover:pl-1'
                                    }`}
                            >
                                <span
                                    className={`h-[3px] rounded-sm bg-[#E8291A] flex-shrink-0 transition-all duration-200 ${
                                        isActive(link.to)
                                            ? 'w-4'
                                            : 'w-0 group-hover:w-4'
                                    }`}
                                />
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 flex flex-col gap-5">
                    <div className="flex gap-3 items-center">
                        {socials.map(s => (
                            <a
                                key={s.alt}
                                href={s.href}
                                aria-label={s.alt}
                                className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 hover:border-[#E8291A] hover:bg-[#E8291A] group"
                            >
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    className="w-[15px] h-[15px] object-contain brightness-[0.3] group-hover:brightness-[10] transition-all duration-200"
                                />
                            </a>
                        ))}
                    </div>
                    <button className="bg-[#E8291A] hover:bg-[#c41f11] text-white border-none py-3.5 px-6 rounded-lg text-sm font-bold tracking-[0.05em] uppercase cursor-pointer font-[Syne,sans-serif] text-center transition-colors duration-200 w-full">
                        Get A Free Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;