import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-24 bg-epicura-navy relative overflow-hidden flex items-center justify-center min-h-[500px]">
      
      {/* Large faint E in background */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[400px] font-serif text-white opacity-[0.03] select-none pointer-events-none leading-none italic">
        E
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Quote Icon */}
        <div className="text-epicura-gold text-6xl font-serif mb-6 leading-none">
          "
        </div>

        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light leading-relaxed mb-10">
          "Epicura didn't just cater our wedding; they choreographed a culinary performance. Our guests are still talking about the truffle-infused risotto three months later."
        </blockquote>

        <cite className="text-epicura-gold text-[10px] tracking-[0.3em] font-sans uppercase not-italic">
           — JULIANNE & MARC, ESTATES AT OAK CREEK
        </cite>

      </div>
    </section>
  );
};

export default Testimonial;
