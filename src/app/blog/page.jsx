import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const blog = () => {
  return (
    <div className='bg-black h-screen text-white'>
       <div className='flex items-center justify-between py-40 lg:py-32 px-10 max-sm:flex-col max-sm:py-5 max-sm:gap-20'>
          <div className='md:pl-20'>
              <h1 className='text-8xl'>404 </h1>
              <p className='text-2xl max-sm:text-xl'>Le Blog  est en construction bientot il sera disponible</p>
              <Link href="/">
                 <button className='p-2 mt-20 max-sm:mt-10  text-xl bg-blue-600 hover:bg-blue-500 rounded  '>Retour à la page d&apos;accueil</button>
              </Link>
          </div>

          <div className='max-sm:w-[290px] animate-bounce'>
              <Image src="/404.png" alt='404 image ' width={500} height={20} priority/>
          </div>
       </div>
    </div>
  )
}

export default blog