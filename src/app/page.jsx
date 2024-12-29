
"use client"
import About from "@/components/About";
import AccueilSection from "@/components/AccueilSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjetSection from "@/components/ProjetSection";
import Aos from "aos";

import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
    
  })
  return (
  <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mx-auto px-5  sm:px-12">
     {/* <Accueil/> */}
     <AccueilSection/>
     <About />
     <ProjetSection/>
    <ContactSection/>
    </div>
    <Footer /> 
  </main>
  )
}
