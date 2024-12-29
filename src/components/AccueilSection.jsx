'use client'

import { useState, useEffect } from 'react'
import { Mail, FileText, Github, Linkedin, Code } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import Image from 'next/image'
import { Meteors } from './ui/meteors'

export default function AccueilSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id='accueil' className="min-h-screen  bg-black text-white flex items-center justify-center px-2 shadow-xl shadow-purple-800 rounded-b-xl">
       <div className=' static mix-blend-difference  '>
               <Image src="/bg-3.jpg" alt="escalator image" fill priority={true} />
      </div>
        
  
      <div className={`max-w-4xl mx-auto transition-all duration-1000  overflow-hidden ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Meaty part - Meteor effect */}
        <Meteors number={40} />

        <div className="space-y-8">
          {/* Welcome message */}
          <div className="text-xl text-gray-400 flex gap-1 font-bold  ">
            <p className='animate-bounce'>👋</p> Welcome to my portfolio
          </div>

          <h1 className="mb-4  text-2xl font-extrabold  text-white  sm:text-3xl md:text-4xl lg:text-4xl lg:leading-normal">
            <span className="from-primary-400  to-secondary-500 bg-inherit bg-gradient-to-r from-purple-400 to-teal-500 bg-clip-text text-transparent">
              Salut je suis{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "okito",
                2000,
                "developpeur web frontend",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="z-[999] leading-relaxed  mb-6 text-base text-white sm:text-xl lg:text-2xl">
             Je crée des <span className="text-purple-500">sites web</span> sur mesure pour magnifier votre présence en ligne, offrant une expérience web captivante et mémorable. 
          </p>

          {/* CTA Buttons */}
          <div className="flex max-mobile:flex-col justify-center gap-2 sm:gap-4">
            <Link
               href="tel:+243900554141"
              className=" flex justify-center items-center  bg-purple-800 hover:bg-purple-900 text-white px-4 sm:px-7 py-2 text-lg rounded-full"
            >
              <Mail className="mr-2 h-5 w-5"/>
              Entrer en contact
            </Link>
            <a 
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
               href="/cv.pdf"  
              //  locale={false}
                download
              className="flex  justify-center items-center border-purple-500 bg-slate-50 text-purple-500 hover:text-white hover:bg-purple-900 px-4 sm:px-7 py-2 text-lg rounded-full"
            >
              <FileText className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12  text-gray-400">
            <a 
               href="https://github.com/Israel-Okito" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/okito-diesho-73449b2a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Link
              href="#contact" 
              className="hover:text-purple-400 transition-colors scroll-smooth"
            >
              <Code className="h-6 w-6" />
              <span className="sr-only">contact</span>
            </Link>
            <a 
              href="mailto:okitdevservice@gmail.com" 
              className="hover:text-purple-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Decorative underline */} 
      </div>
      
        <div className="absolute bottom-20 mt-12  left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-teal-500/0"></div>                 
    </div>
  )
}