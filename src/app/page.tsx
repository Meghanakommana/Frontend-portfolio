import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ  from "./components/FAQ";
import Contact from "./components/contact";
import Navbar from "./components/Navbar";
import SessionFees from "./components/SessionFees";
import MotivationGallery from "./components/MotivationGallery";
export default function Home() {
  return (
    <>
      <Navbar />

      <main >
       <Hero />
       <About />
       <Services />
       <SessionFees />
        <MotivationGallery />
       <FAQ />
       <Contact />
       {/* Add more components as needed */}
     </main>
    
   
    </>
  );
}
