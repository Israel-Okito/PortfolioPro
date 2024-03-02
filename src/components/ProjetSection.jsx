import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import ProjectCard from './ProjectCard';

const projectsData = [
  
    {
      id: 1,
      title: "Application de Suivi de Fitness",
      description: "Une application web de suivi de fitness personnalisé pour aider les utilisateurs à atteindre leurs objectifs de santé et de bien-être.",
      bigdescription: "Notre application web de suivi de fitness offre une approche individualisée pour accompagner les utilisateurs dans leur parcours de remise en forme. Grâce à des fonctionnalités de suivi d'entraînement, de perte de calories  et de progrès, elle permet une expérience holistique pour atteindre des objectifs de santé et de bien-être durables.",
      image: "/fitness.png",
      tag: ["All", "Web"],
      gitUrl: "https://joelgym.vercel.app",
      previewUrl: "https://joelgym.vercel.app",
      techno:"reactjs, webpack, mui material, redux"
    },

    {
      id: 2,
      title: "Mit Book",
      description: "un site bibliothèque universitaire",
      bigdescription: "Explorez le  site bibliothèque universitaire de (Ecole Polytechnique Méditerranéenne Privé), votre portail vers une mine de connaissances. Avec une interface conviviale et des fonctionnalités de recherche avancées, le site offre un accès facile à une vaste collection de ressources académiques Des bases de données spécialisées aux archives numériques, la plateforme est conçue pour faciliter la recherche et l'apprentissage Rejoignez l'université dans cette exploration virtuelle du savoir où l'information est à portée de clic pour enrichir votre parcours académique.",
      image: "/mobile4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      // previewUrl: "",
      techno:"reactjs, strapi,mysql, sass"
    },

    {
      id: 3,
      title: "Plateforme de collaboration  universitaire",
      description: "Project 3 description",
      bigdescription: "Explorez le plateforme de collaboration universitaire, offrant une interface intuitive  permettant aux étudiants et aux professeurs de se connecter facilement, d'échanger des idées et de collaborer via une fonctionnalité de chat integrée, favorisant ainsi un environnement d'apprentissage interactif et collaboratif.",
      image: "/mobile1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      // previewUrl: "/",
      techno:" nextjs, prisma, socket.io, tailwindcss,shadcn, chartjs "
    },
    {
      id: 4,
      title: "Next.js Portfolio Website",
      description: "un  portfolio pour developpeur web ",
      bigdescription: "Plongez dans mon univers créatif à travers ma maquette de portfolio. Chaque élément a été soigneusement conçu pour refléter mon style unique et mes compétences en design web. Cette maquette met en avant une interface intuitive, un design épuré et une navigation fluide, offrant ainsi un aperçu de mes capacités en matière de conception web. Explorez ce concept innovant qui incarne mon engagement envers l'esthétique et la fonctionnalité.",
      image: "/mobile.gif",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://okito.vercel.app",
      techno:"nextjs, framer-motion, aos, tailwindcss, lucide-react, resend"
    },
]
    

function ProjetSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
  return (
    <section id='projet' className="mt-20">
 
        <div className='z-10  '>
    
           <h1 className="mb-8 mt-20 text-center text-4xl font-bold text-white md:mb-12">
              Mes derniers <span className='text-purple-500'>projets</span>
            </h1>

            <p
              className="rounded-2xl bg-white/95 px-5 py-2 text-center  font-mono text-black max-sm:px-1  md:rounded-br-full   md:rounded-tl-full   "
            >
              je m&apos;engage dans des collaborations stimulantes avec mes clients pour donner vies à des projets web captivants, épanouissant ainsi ma passion pour la création des sites internet
           </p>
        </div>

        <div className='p-10'>
        <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              bigdescription={project.bigdescription}
              imgUrl={project.image}
              techno={project.techno}
            //   gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
        </div>
    </section>
  )
}

export default ProjetSection