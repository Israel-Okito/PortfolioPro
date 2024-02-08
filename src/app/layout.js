// import { Inter } from 'next/font/google'
import './globals.css'
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Développeur Web | Expert Front-end | Projets Innovants',
  description: "Découvrez le portfolio d'un développeur web passionné. Expert en développement front-end, spécialisé en HTML, CSS, JavaScript et d'autres frameworks. Explorez des projets innovants et engagez-vous pour des expériences web exceptionnelles.",
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
        <div className='fixed left-0 top-[70%] flex flex-col gap-2 p-1 text-xl text-white'>
           <p className='rounded-full bg-white p-2 text-red-400 shadow-2xl' ><GrInstagram /></p >
           <p className='rounded-full bg-white p-2 text-black shadow-2xl' ><FaGithub/></p >
           <p className='rounded-full bg-white p-2 text-blue-500 shadow-2xl' ><FaLinkedin/></p>
        </div>
        {children}
      </body>
    </html>
  )
}
