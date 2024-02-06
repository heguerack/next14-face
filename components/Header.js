'use client'
import { useGlogalContext } from '@/lib/Context'
import { MenuIcon, PhoneCall, PhoneIcon, X } from 'lucide-react'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Header() {
  const { isMenuSidebarOpen, setMenuIsSidebarOpen } = useGlogalContext()
  console.log(isMenuSidebarOpen)

  return (
    <div className=' bg-blue-100 '>
      <div className='flex items-center justify-between px-4 h-[5rem]'>
        <div className='relative w-[4rem] h-[4rem] '>
          <Image
            src='/images/face-and-body-wellness-center-logo.jpg'
            alt=''
            className='object-cover rounded-full'
            fill
          />
        </div>
        <PhoneCall className='h-8 w-8' />
        {!isMenuSidebarOpen && (
          <MenuIcon
            className='h-8 w-8'
            onClick={() => setMenuIsSidebarOpen(!isMenuSidebarOpen)}
          />
        )}
        {isMenuSidebarOpen && (
          <X
            className='h-8 w-8'
            onClick={() => setMenuIsSidebarOpen(!isMenuSidebarOpen)}
          />
        )}
      </div>
      {/* {isMenuSidebarOpen && <NavigationMenuDemo />} */}
    </div>
  )
}
