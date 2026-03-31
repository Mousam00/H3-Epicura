import React from 'react';

const Services = () => {
  const occasions = [
    {
      title: "Weddings",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Corporate",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Private",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="text-4xl lg:text-5xl font-serif text-epicura-navy mb-4">
          Exquisite Occasions
        </h2>
        <div className="w-16 h-0.5 bg-epicura-gold mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <div key={index} className="group relative aspect-[3/4] rounded-t-3xl rounded-b-[40px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              
              {/* Dark Overlay for Image */}
              <div className="absolute inset-0 bg-epicura-navy/40 group-hover:bg-epicura-navy/20 transition-all duration-500 z-10"></div>
              
              <img 
                src={occasion.image} 
                alt={occasion.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end text-left">
                <h3 className="text-3xl font-serif text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {occasion.title}
                </h3>
                <a href={occasion.link} className="text-white text-[10px] tracking-widest uppercase font-semibold border-b border-white/30 inline-block pb-1 w-max hover:border-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500 delay-100">
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
