
import { Toaster } from '@/components/ui/toaster';
import './globals.css'
// import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Portfolio Développeur Web | Expert Front-end | Projets Innovants',
  description: "Découvrez le portfolio d'un développeur web passionné. Expert en développement front-end, spécialisé en HTML, CSS, JavaScript et d'autres frameworks comme Nextjs et Reactjs. Explorez des projets innovants et engagez-vous pour des expériences web exceptionnelles.",
  // manifest: 'http://localhost:3001',
  url: 'https://okito.vercel.app',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'okito.vercel.app', 'okito', 'okito diesho', 'React', 'JavaScript', 'frontend développeur', 'developper web ', 'Tailwindcss'],
  authors: [{ name: 'Israel' }, { name: 'Okito' , url: 'https://okito.vercel.app'
 }],
  creator: ' okito diesho',
  publisher: ' Okito diesho',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
   icons: [{ rel: "icon", url: "/favicon.ico" }],

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
         {/* <SpeedInsights /> */}
         <Toaster/>
      </body>
    </html>
  )
}
