import React from 'react';
import { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const About = () => {
     const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
        <Navbar/>

<div className="relative h-[20vh] sm:h-[25vh] md:h-[30vh] w-full overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-10 px-4">
    <h1
      className={`
        text-white text-xl sm:text-2xl md:text-3xl font-bold
        transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      About Us
    </h1>
  </div>

  <video
    src="/videos/cats-grocery-trip.mp4"
    autoPlay
    muted
    loop
    playsInline
    poster="/images/fallback.jpg"
    className="w-full h-full object-cover brightness-75"
  >
    Your browser does not support the video tag.
  </video>
</div>

<main className="px-4 sm:px-6 md:px-8 py-12 bg-gray-50">

  
  <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    
    
    <div className="md:w-1/2 text-gray-800 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold">About Our Product</h2>
      <p className="text-base sm:text-lg leading-relaxed">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magnam quis mollitia quasi laudantium iste modi, corporis qui ipsam cum eum magni excepturi quas, perferendis soluta. Pariatur, magnam ipsum doloribus maiores possimus iusto numquam alias rerum consequatur hic eum molestias laboriosam labore aut. Neque harum quidem nam ipsam culpa fugit tempora unde enim dicta veniam sequi sunt officiis expedita optio, quam illum dolorem odio earum ab. Officia laudantium iste harum!
      </p>
    </div>

    
    <div className="md:w-1/2 flex justify-center">
      <div className="border-4 border-amber-600 rounded-xl p-2 shadow-lg transform transition duration-700 hover:scale-95 w-full max-w-xs sm:max-w-sm">
        <img
          src="/images/jacket.jpg"
          alt="Jacket"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  </section>

  
  <section className="mt-24 pt-16 pb-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
    
      <div className="md:w-1/2 space-y-6 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias fugiat unde cum? Nihil inventore perferendis ab? Iure eos, eum, magni ipsam, obcaecati sunt est dicta facere dolore totam quis!
        </p>
        <blockquote className="italic border-l-4 border-amber-800 pl-4 text-gray-600">
          “Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.”
          <br />
          <span className="block mt-2 font-semibold text-amber-800">– Steve Jobs</span>
        </blockquote>
      </div>

      
      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-xl overflow-hidden border-4 border-amber-700 shadow-xl transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl w-full max-w-xs sm:max-w-sm">
          <img
            src="/images/satisfaction.jpeg"
            alt="Satisfaction"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  </section>

</main>

 <Footer/>
        </>
  );
};

export default About;
