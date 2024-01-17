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
              className="mt-10 text-black bg-white/95 rounded-xl drop-shadow-2xl shadow-2xl shadow-white  " id="propos"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/aboutImg.png" 
           alt="logo design message" 
           width={500} 
           height={500}
            priority  
            // quality={75}
          //  blurDataURL="/aboutImg.png"
          // placeholder="blur"
          />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold  mb-4">A propos de Moi</h2>
          <p className="text-base lg:text-lg">
              je suis un développeur web front-end basé à tunis en Tunisie . Je développe des applications Web complètes, 
             <span className="text-purple-900 font-bold flex"><RiDoubleQuotesL/>Chaque grand design commence par une histoire encore meilleure.</span>
             Au cours  de mon parcours en tant que développeur web indépendant, je cultive une confiance tranquille et une curiosité naturelle. Mon engagement envers l&apos;excellence technique et ma passion pour l&apos;innovation m&apos;ont permis d&apos;aborder chaque projet avec un esprit ouvert, cherchant constamment à repousser les limites de mes compétences. 
          </p>
          <div className="flex flex-row justify-start mt-8">
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
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
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
