import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-epicura-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images Section */}
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-[4/5] w-full max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                alt="Exquisite Plated Dish" 
                className="w-full h-full object-cover"
               />
             </div>
             
             {/* Small overlapping image */}
             <div className="absolute -bottom-10 -right-4 lg:-right-12 w-64 aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-epicura-light hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                  alt="Epicura Waitstaff" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h4 className="text-[10px] uppercase pl-1 tracking-[0.3em] font-semibold text-gray-500 mb-6 font-sans">
              THE EPICURA STANDARD
            </h4>
            <h2 className="text-5xl lg:text-6xl font-serif text-epicura-navy leading-tight mb-8">
              Where Every<br/>Detail<br/>Is a Masterpiece
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-10 text-[15px] max-w-lg">
              Epicura is not just a catering service. It is a full-sensory journey. From the first sketch of a menu to the final flourish of a garnish, we curate experiences that linger in the memory of your guests long after the final toast.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[11px] font-semibold tracking-[0.2em] text-epicura-navy uppercase flex items-center group">
                OUR PHILOSOPHY
                <span className="w-12 h-[1px] bg-epicura-gray ml-4 group-hover:w-16 transition-all duration-300"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
