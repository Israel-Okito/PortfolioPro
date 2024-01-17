
"use client"
import About from "@/components/About";
import Accueil from "@/components/Accueil";
import Contact from "@/components/Contact";
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
    <div className="container mt-24 mx-auto px-12 py-4">
     <Accueil/>
     <About />
     <ProjetSection/>
     <Contact/>
    
    </div>
    <Footer /> 
  </main>
  )
}
