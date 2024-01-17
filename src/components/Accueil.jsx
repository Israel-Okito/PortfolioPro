"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Accueil = () => {
  return (
    <section className="lg:py-16 ">
      <div className=' mix-blend-difference static '>
              <Image src="/bg-3.jpg" alt="escalator image" fill priority={true} />
       </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 relative">
        <div
          // initial={{ opacity: 0, scale: 0.6 }}
          // animate={{ opacity: 1, scale: 0.8 }}
          // transition={{ duration: 0.3 }}
          // initial={{ opacity: 0, scale: 0.6}}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.3 }}
          className="col-span-8 place-self-center text-center sm:text-left pr-10 justify-self-start"
        >
          <h1 className="text-white mb-4 text-xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 bg-inherit from-purple-400 to-teal-500">
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
          <p className="text-[#ADB7BE] text-base z-999 sm:text-lg mb-6 lg:text-xl">
             Je crée des sites web sur mesure pour magnifier votre présence en ligne, offrant une expérience web captivante et mémorable. 
          </p>
          <div>
            <Link
               href="#contact"
              className="px-6 inline-block cursor-pointer py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-black hover:bg-slate-200 text-white"
            >
             Contactez moi
            </Link>

            <Link
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
               href="/cv.pdf"  
               locale={false}
                download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-teal-500 hover:bg-slate-900 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Télécharger mon CV
              </span>
            </Link>
          </div>
        </div>


        <div
        //  initial={{ opacity: 0, scale: 0.9 }}
        //  animate={{ opacity: 1, scale: 1 }}
        //  transition={{ duration: 0.1 }}
              // initial={{ opacity: 0, scale: 0.5 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/moi.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
