"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/sendEmail";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message envoyer");
  //     setEmailSubmitted(true);
  //   }
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
      .sendForm( "service_ci19m7s", "template_ao4cjfd" , form.current, {
        publicKey: "wbX81KeKtBFIM5zfv",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10 ">
        <h5 className="my-2 text-xl font-bold text-white">
        Contactez-moi pour collaborer
        </h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          {" "}
          Je suis intéressé par les opportunités de freelance, en particulier projet ambitieux ou de grande envergure. Toutefois, si vous avez d&apos;autres demandes ou question, n&apos;hésitez pas à me contacter en utilisant le formulaire ci-dessous Soit en m&apos;envoyant un mail à l&apos;adresse israelokito88@gmail.com
        </p>
        <div 
           className="  flex animate-bounce justify-center text-white"
        >
         <Image src="/message.png" 
         alt="contact email" 
         width={250}
          height={50}
        //  quality={75}
        //  blurDataURL="/message.png"
        //  placeholder="blur" 
         priority/>
        
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">
            l&apos;email a été envoyé avec succès
          </p>
        ) : (
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Ton email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="okito@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                Sujet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 "
                placeholder="votre sujet..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 "
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className=" w-full rounded-lg bg-purple-500 px-5 py-2.5 font-medium text-white hover:bg-purple-800"
            >
              Envoyer le Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
