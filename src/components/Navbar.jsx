/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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

];

const Navbar = () => {

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link
          href={"/"}
          className=" font-semibold text-white"
        >
          <Image src="/dev.png" alt="logo dev" width={50} height={1} />
        </Link>

        <div className="mobile-menu block text-white md:hidden">

          <Sheet>
               <SheetTrigger asChild>
                  <button
                    id="buttonMenu"
                    title="Menu"
                    className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
                  >
                     <Bars3Icon className="size-5" />
                  </button>
               </SheetTrigger>
               <SheetContent >
                 <SheetDescription className="mt-16">

                 </SheetDescription>
                     <div className="mb-5">
                     {navLinks.map((link, index) => (
                        <li key={index} className="mt-3 list-none  border-b-2 border-slate-100 hover:text-slate-200">
                      
                          <Link href={link.path}>
                             <p className="cursor-pointer rounded py-2  pl-3 pr-4 text-black hover:text-slate-800 sm:text-xl md:p-0">{link.title}</p>
                          </Link>
                          
                        
                        </li>
                        
                      ))}
                     </div>
                
                 <SheetFooter>
                   <SheetClose asChild>
                     <Link href="#contact">
                        <button id="buttonContact" title="Contact" type="submit" className="rounded bg-black p-3 text-lg text-white ">Contact</button>
                     </Link>
                   </SheetClose>
                 </SheetFooter>
               </SheetContent>
          </Sheet>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
             
                 <Link href={link.path}>
                    <p className="cursor-pointer rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0">{link.title}</p>
                 </Link>
              </li>
            ))}
            <li className="cursor-pointer rounded py-2 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0">
               <a href="https://www.okitdev.com" target="_blank" rel="noopener noreferrer">
                 Blog
               </a>
            </li>
            <li>
                <Link href="#contact" className=" rounded bg-purple-500 px-8 py-2 text-lg text-white hover:bg-purple-800">Contact</Link>
            </li>
          </ul>
        </div>
      </div> 
    
    </nav>
  );
};

export default Navbar;
