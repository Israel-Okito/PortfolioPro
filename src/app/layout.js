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
  url: 'http://localhost:3001',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Framer motion', 'AOS', 'Tailwindcss'],
  authors: [{ name: 'Israel' }, { name: 'Okito' , url: 'http://localhost:3001'
 }],
  creator: 'Israel okito',
  publisher: 'Israel Okito',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/dev.png',
    shortcut: '/dev.png',
  }
}

export const viewport = {
  themeColor: '#317EFB',
  background_color: '#3367D6',
  display: 'standalone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black m-0 '>
        <div className='fixed top-[70%] text-white left-0 p-1 flex flex-col gap-2 text-xl'>
           <p className='bg-white shadow-2xl text-red-400 p-2 rounded-full' ><GrInstagram /></p >
           <p className='bg-white shadow-2xl text-black p-2 rounded-full' ><FaGithub/></p >
           <p className='bg-white shadow-2xl text-blue-500 p-2 rounded-full' ><FaLinkedin/></p>
        </div>
        {children}
      </body>
    </html>
  )
}
