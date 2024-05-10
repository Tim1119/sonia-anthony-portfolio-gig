import Image from "next/image";
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <main className="">
        <Navbar />
        <div className="mt-[70px]" >
         
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact/>  
        </div>
       
      <Footer />  
    </main>
  );
}

