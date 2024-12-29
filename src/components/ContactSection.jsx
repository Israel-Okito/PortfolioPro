'use client'

import  { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Code, ExternalLink, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image'

export default function ContactSection() {


  const { toast } = useToast()

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
      .sendForm( "service_ci19m7s", "template_r8tvfsa", form.current, {
        publicKey: "wbX81KeKtBFIM5zfv",
      })
      .then(
        (result) => {
          toast({
            title: "merci d'avoir envoyé un email à okito, vous allez recevoir un retour dans quelques minutes ",
            
            
          })
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white p-2 mobile:p-4 md:p-8 rounded-lg" id="contact" >
          <div className="flex flex-col items-center  "
          data-aos="zoom-in-down"
           >
               <h5 className="my-6 text-xl font-bold text-white">
               Contactez-moi pour collaborer
               </h5>
               <p className="mb-8  text-[#ADB7BE]">
                 {" "}
                 Je suis intéressé par les opportunités de freelance, en particulier projet ambitieux ou de grande envergure. Toutefois, si vous avez d&apos;autres demandes ou question, n&apos;hésitez pas à me contacter en utilisant le formulaire ci-dessous Soit en m&apos;envoyant un mail à l&apos;adresse israelokito88@gmail.com
               </p>

             
         </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6" >

        {/* Contact Form Panel */}
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden" 
        data-aos="zoom-in-down"
        >
          {/* Terminal Header */}
          <div className="bg-[#2a2a2a] p-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-sm text-gray-400">contact-form.jsx</span>
           
                <Image src="/message.png" 
                alt="contact email gif" 
                width={30}
                 height={20} 
                priority
                className=' animate-bounce'
                />
          </div>

          {/* Form Content */}
          <form ref={form} onSubmit={sendEmail} className="p-6 space-y-6"  >
            <div>
              <label htmlFor='name' className="text-gray-400 mb-2 block">Nom</label>
              <Input
                type="text"
                placeholder="Votre nom"
                className="bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500"
                required
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor='email' className="text-gray-400 mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="okito@gmail.com"
                className="bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500"
                required
                name="email"
                id="email"
              />
            </div>
            <div>
              <label   htmlFor="subject" className="text-gray-400 mb-2 block">Sujet</label>
              <Input
                placeholder="le sujet votre email..."
                className="bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500 min-h-[150px]"
                name="subject"
                type="text"
                id="subject"
                required
              />
            </div>
            <div>
              <label   htmlFor="message" className="text-gray-400 mb-2 block">Message</label>
              <Textarea
                placeholder="Votre message..."
                className="bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500 min-h-[150px]"
                name="message"
                type="text"
                id="message"
                required
              />
            </div>
            <Button   type="submit" className="w-full bg-gradient-to-br from-purple-500 to-teal-500  text-white font-medium">
              <Mail className="w-4 h-4 mr-2" />
               envoyé un message
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              Je réponds généralement dans 48h
            </div>
          </form>
        </div>

        {/* Info Panel */}
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden"
           data-aos="zoom-in-down"
         >
       
          <div className="bg-[#2a2a2a] p-4 flex items-center justify-between">
            <div className="flex gap-1 mobile:gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-sm text-gray-400">mes coordonnées</span>

            <Image src="/message.png" 
                alt="contact email gif" 
                width={30}
                 height={20} 
                priority
                className=' animate-bounce'
                />
          </div>

          <div className="p-6 max-mobile:px-2 space-y-8" >
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mobile:gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>okitdevservice@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+243 900554141</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>RDC-kinshasa</span>
              </div>
            </div>

            
            <div className="border-t border-gray-800"></div>

            {/* Social Links */}
            <div className="space-y-4">
              <a 
                href="https://github.com/Israel-Okito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center  gap-2 mobile:gap-4 hover:text-purple-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/israel-okito</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              <a 
                href="https://www.linkedin.com/in/okito-diesho-73449b2a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 mobile:gap-4 hover:text-purple-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/okito-diesho</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              <a 
                href="https://www.okitdev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center  gap-2 mobile:gap-4 hover:text-purple-500 transition-colors"
              >
                <Code className="w-5 h-5" />
                <span>Mon blog okitdev</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 mt-8">
              <div className="w-4 h-4 rounded-full animate-pulse bg-gradient-to-br from-purple-500 to-teal-500"></div>
              <span> Je suis intéressé par les opportunités</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}