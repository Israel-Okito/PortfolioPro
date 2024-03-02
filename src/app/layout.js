// import { Inter } from 'next/font/google'
import './globals.css'
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Développeur Web | Expert Front-end | Projets Innovants',
  description: "Découvrez le portfolio d'un développeur web passionné. Expert en développement front-end, spécialisé en HTML, CSS, JavaScript et d'autres frameworks comme Nextjs et Reactjs. Explorez des projets innovants et engagez-vous pour des expériences web exceptionnelles.",
  // manifest: 'http://localhost:3001',
  url: 'https://okito.vercel.app',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Framer motion', 'AOS', 'Tailwindcss'],
  authors: [{ name: 'Israel' }, { name: 'Okito' , url: 'https://okito.vercel.app'
 }],
  creator: 'Israel okito',
  publisher: 'Israel Okito',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
   icons: [{ rel: "icon", url: "/favicon.ico" }],
  // icons: {
  //   icon: '/dev.png',
  //   shortcut: '/dev.png',
  // }
}

export const viewport = {
  themeColor: '#317EFB',
  background_color: '#3367D6',
  display: 'standalone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 bg-black '>
         {children}
      </body>
    </html>
  )
}
