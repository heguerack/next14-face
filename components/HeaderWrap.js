'use client'

import { MenuIcon, PhoneCall, PhoneIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function HeaderWrap({ children }) {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <div className=' bg-blue-100 '>
      <div className='flex items-center justify-between p-4 px-4'>
        <div className='relative w-[3rem] h-[3rem] '>
          <Image
            src='/images/face-and-body-wellness-center-logo.jpg'
            alt=''
            className='object-cover rounded-full'
            fill
          />
        </div>
        <PhoneCall className='h-8 w-8' />
        {!showNavbar && (
          <MenuIcon
            className='h-8 w-8'
            onClick={() => setShowNavbar(!showNavbar)}
          />
        )}
        {showNavbar && (
          <X className='h-8 w-8' onClick={() => setShowNavbar(!showNavbar)} />
        )}
      </div>
      {showNavbar && children}
    </div>
  )
}
// 'face-and-body-wellness-center-logo.jpg'
