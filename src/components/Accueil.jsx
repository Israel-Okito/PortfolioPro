
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Meteors } from "./ui/meteors";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Accueil = () => {
  return (
    <section className="lg:py-16 ">
       
      <div className=' static mix-blend-difference '>
          <Image src="/bg-3.jpg" alt="escalator image" fill priority={true} />
      </div>

      <div className="relative grid grid-cols-1 overflow-hidden sm:grid-cols-12">
        <div
          className="col-span-8 place-self-center justify-self-start pr-2 text-center sm:pr-10 sm:text-left"
        >
          <h1 className="mb-4 text-2xl font-extrabold  text-white  sm:text-3xl md:text-4xl lg:text-4xl lg:leading-normal">
            <span className="from-primary-400  to-secondary-500 bg-inherit bg-gradient-to-r from-purple-400 to-teal-500 bg-clip-text text-transparent">
              salut je suis{" "}
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

          <p className="z-[999] mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
             Je crée des sites web sur mesure pour magnifier votre présence en ligne, offrant une expérience web captivante et mémorable. 
          </p>

          <div className="flex max-md:flex-col gap-5  justify-center items-center">
            <Link
               href="#contact"
              className="inline-block w-full cursor-pointer rounded-full bg-gradient-to-br from-purple-500 to-black px-6 py-3 text-white hover:bg-slate-200 sm:w-fit"
            
            >
             Contactez moi
            </Link>

            <a
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
               href="/cv.pdf"  
              //  locale={false}
                download
              className="inline-block w-full rounded-full bg-gradient-to-br from-purple-500 to-teal-500 p-1 text-white hover:bg-slate-900 sm:w-fit"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Télécharger mon CV
              </span>
            </a>
            
            <div className='fixed left-0 top-[70%] flex flex-col gap-2 p-1 text-xl text-white'>
              {/* <p className='rounded-full bg-white p-2 text-red-400 shadow-2xl' ><GrInstagram />
                 </p > */}
                 
           <Link  className='z-[999] animate-bounce cursor-pointer rounded-full bg-white p-2 text-black shadow-2xl' href="https://github.com/Israel-Okito">
             <FaGithub/>
           </Link>
           <Link  className='z-[999] animate-bounce cursor-pointer rounded-full bg-white p-2  text-blue-500  shadow-2xl' href="https://github.com/Israel-Okito">
           <FaLinkedin/>
           </Link>
        </div>
          </div>
        </div>


        <div
    
          className="col-span-4 mt-4 place-self-center lg:mt-0 "
        >
          <div className="relative size-[250px] rounded-full border-2   bg-gradient-to-br from-purple-500 to-teal-500 lg:size-[400px] ">
            <Image
              src="/isael1.png"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              width={300}
              height={300}
            />
            
          </div>
        </div>


          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        

    
      </div>


    </section>
  );
};

export default Accueil;
