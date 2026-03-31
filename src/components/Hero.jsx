import React from 'react';
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
          alt="Elegant Catering Setup" 
          className="w-full h-full object-cover"
        />
        {/* Gradient fade out at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-epicura-light to-transparent z-10"></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col items-center">
        <div className="w-24 h-24 mb-6 relative group">
            <img src={logo} alt="Epicura Logo" className="scale-150 drop-shadow-2xl group-hover:scale-[1.6] group-hover:-translate-y-2 transition-all duration-500" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[80px] text-epicura-navy font-serif leading-tight mb-4">
          Luxury Catering<br/>
          <span className="italic text-epicura-gold font-normal">Crafted to Perfection</span>
        </h1>
        
        <p className="mt-6 text-gray-600 font-light tracking-wide max-w-xl mx-auto text-sm leading-relaxed">
          Elevating your most cherished moments through bespoke culinary<br/>
          artistry and impeccable service.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
          <a href="#" className="bg-epicura-navy text-white px-8 py-4 text-[11px] tracking-widest hover:bg-opacity-90 transition-all rounded-full font-medium shadow-md">
            EXPLORE EXPERIENCES
          </a>
          <a href="#" className="bg-white/80 backdrop-blur-sm text-epicura-navy border border-gray-200 px-8 py-4 text-[11px] tracking-widest hover:bg-white transition-all rounded-full font-medium shadow-sm">
            VIEW OUR MENUS
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;
