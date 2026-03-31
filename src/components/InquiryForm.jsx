import React from 'react';

const InquiryForm = () => {
  return (
    <section id="inquire" className="py-24 bg-epicura-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-6xl font-serif text-epicura-navy mb-8 leading-tight">
            Curate Your<br/>Next Event
          </h2>
          <p className="text-gray-600 font-light text-sm mb-12 max-w-md leading-relaxed">
            Our event specialists are ready to help you design a menu that exceeds expectations. Let's begin the journey to your perfect event today.
          </p>

          <form className="space-y-8 max-w-lg">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              <div className="flex-1">
                <label className="block text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  FULL NAME
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Alexander Hamilton"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-epicura-navy focus:outline-none focus:border-epicura-navy transition-colors placeholder-gray-300"
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  EVENT TYPE
                </label>
                <div className="relative">
                  <select 
                    defaultValue="Wedding/Celebration"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-epicura-navy focus:outline-none focus:border-epicura-navy transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Wedding/Celebration">Wedding/Celebration</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Dining">Private Dining</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div>
               <label className="block text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  YOUR VISION (OPTIONAL)
                </label>
                <input 
                  type="text" 
                  placeholder="Tell us about the experience you wish to create..."
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-epicura-navy focus:outline-none focus:border-epicura-navy transition-colors placeholder-gray-300"
                />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="button"
                className="bg-epicura-navy text-white px-10 py-4 text-[11px] tracking-widest hover:bg-opacity-90 transition-all rounded-full font-medium"
              >
                INQUIRE
              </button>
            </div>

          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
           <div className="w-full max-w-md mx-auto aspect-square rounded-[30px] overflow-hidden shadow-2xl relative z-10">
             <img 
               src="https://images.unsplash.com/photo-1610036615775-f5814e8bd4df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Elegant Sunset Outdoor Dining" 
               className="w-full h-full object-cover"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default InquiryForm;
