"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { RiDoubleQuotesL} from "react-icons/ri";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>prisma</li>
        <li>css</li>
        <li>tailwind</li>
        <li>sass</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Isti web</li>
        <li>Ecole polytechnique méditerranéenne</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section  data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800" 
              className="mt-10 rounded-xl bg-white/95 text-black shadow-2xl shadow-white drop-shadow-2xl  " 
              id="propos"
    >
      
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image src="/aboutImg.png" 
           alt="logo design message" 
           width={500} 
           height={500}
            priority  
          />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-3xl  font-bold">A propos de Moi</h2>
          <p className="text-base lg:text-lg">
              je suis un développeur web front-end basé à tunis en Tunisie . Je développe des applications Web complètes, 
             <span className="flex font-bold text-purple-900"><RiDoubleQuotesL/>Chaque grand design commence par une histoire encore meilleure.</span>
             Au cours  de mon parcours en tant que développeur web indépendant, je cultive une confiance tranquille et une curiosité naturelle. Mon engagement envers l&apos;excellence technique et ma passion pour l&apos;innovation m&apos;ont permis d&apos;aborder chaque projet avec un esprit ouvert, cherchant constamment à repousser les limites de mes compétences. 
          </p>
          <div className="mt-8 flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
       
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
