import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-epicura-text bg-epicura-light min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <InquiryForm />
      <Footer />
    </div>
  );
}

export default App;
