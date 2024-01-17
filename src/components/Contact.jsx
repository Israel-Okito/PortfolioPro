"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message envoyer");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">
        Contactez-moi pour collaborer
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Je suis intéressé par les opportunités de freelance, en particulier projet ambitieux ou de grande envergure. Toutefois, si vous avez d&apos;autres demandes ou question, n&apos;hésitez pas à me contacter en utilisant le formulaire ci-dessous Soit en m&apos;envoyant un mail à l&apos;adresse israelokito88@gmail.com
        </p>
        <div 
           className="  text-white animate-bounce flex justify-center"
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
          <p className="text-green-500 text-sm mt-2">
            l&apos;email a été envoyé avec succès
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Ton email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="okito@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Sujet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="votre sujet..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className=" text-white bg-purple-500 hover:bg-purple-800 font-medium py-2.5 px-5 rounded-lg w-full"
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
