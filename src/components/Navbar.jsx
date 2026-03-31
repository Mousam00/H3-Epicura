import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo for Navbar */}
        <div className="h-10">
          {/* <img src={logo} alt="" className="w-full h-full" /> */}
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.2em] font-medium text-gray-500">
          <a href="#" className="hover:text-epicura-navy transition-colors pb-1 border-b border-transparent hover:border-epicura-navy">HOME</a>
          <a href="#" className="hover:text-epicura-navy transition-colors pb-1 border-b border-transparent hover:border-epicura-navy">SERVICES</a>
          <a href="#" className="hover:text-epicura-navy transition-colors pb-1 border-b border-transparent hover:border-epicura-navy">ABOUT US</a>
          <a href="#" className="hover:text-epicura-navy transition-colors pb-1 border-b border-transparent hover:border-epicura-navy">PORTFOLIO</a>
          <a href="#" className="hover:text-epicura-navy transition-colors pb-1 border-b border-transparent hover:border-epicura-navy">MENU</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#inquire" className="bg-epicura-navy text-white px-8 py-3 text-[11px] tracking-[0.15em] hover:bg-opacity-90 transition-all rounded-full font-medium">
            INQUIRE NOW
          </a>
        </div>

        {/* Mobile Menu Button - simplified */}
        <button className="md:hidden text-epicura-navy focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
