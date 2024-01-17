"use client";
import Link from "next/link";
import React, { useState } from "react";
// import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
  
const navLinks = [
  {
    title: "Accueil",
    path: "#accueil",
  },
 
  {
    title: "Portfolio",
    path: "#projet",
  },
  {
    title: "A propos",
    path: "#propos",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100 ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className=" text-white font-semibold"
        >
          <Image src="/dev.png" alt="logo dev" width={50} height={1} />
        </Link>

        <div className="mobile-menu text-white block md:hidden">

          <Sheet>
               <SheetTrigger asChild>
                  <button
                    id="buttonMenu"
                    title="Menu"
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                  >
                     <Bars3Icon className="h-5 w-5" />
                  </button>
               </SheetTrigger>
               <SheetContent >
                 <SheetDescription className="mt-16">

                 </SheetDescription>
                     <div className="mb-5">
                     {navLinks.map((link, index) => (
                        <li key={index} className="list-none mt-3  border-b-2 border-slate-100 hover:text-slate-200">
                      
                          <Link href={link.path}>
                             <p className="py-2 pl-3 pr-4  text-black sm:text-xl rounded md:p-0 hover:text-slate-800 cursor-pointer">{link.title}</p>
                          </Link>
                          
                        
                        </li>
                        
                      ))}
                     </div>
                
                 <SheetFooter>
                   <SheetClose asChild>
                     <Link href="#contact">
                        <button id="buttonContact" title="Contact" type="submit" className="bg-black text-lg text-white p-3 rounded ">Contact</button>
                     </Link>
                   </SheetClose>
                 </SheetFooter>
               </SheetContent>
          </Sheet>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
             
                 <Link href={link.path}>
                    <p className="py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">{link.title}</p>
                 </Link>
              </li>
            ))}
            <li>
                <Link href="#contact" className=" bg-purple-500 hover:bg-purple-800 text-lg text-white px-8 py-2 rounded">Contact</Link>
            </li>
          </ul>
        </div>
      </div> 
    
    </nav>
  );
};

export default Navbar;
