'use client'
import {
  FacialsNavInfo,
  cocoonNavInfo,
  laserHairRemovalNavInfo,
  massagesNavInfo,
  microneedlingNavInfo,
  tatooRemovalNavInfo,
} from '@/data/services'

import BookingSidebarItem from './BookingSidebarItem'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import { useGlogalContext } from '@/lib/Context'

export default function BookingSidebarBackup() {
  const { isBookingSidebarOpen, setIsBookingSidebarOpen } = useGlogalContext()
  return (
    // <div className=''>
    <NavigationMenu className='fixed w-[100vw] top-0 left-0 z-20 bg-black h-screen p-4'>
      <NavigationMenuList className='flex flex-wrap gap-4'>
        <BookingSidebarItem navCompInfo={FacialsNavInfo} />
        <BookingSidebarItem navCompInfo={massagesNavInfo} />
        <BookingSidebarItem navCompInfo={microneedlingNavInfo} />
        <BookingSidebarItem navCompInfo={laserHairRemovalNavInfo} />
        <BookingSidebarItem navCompInfo={cocoonNavInfo} />
        <BookingSidebarItem navCompInfo={tatooRemovalNavInfo} />
        {/* <button
            className='text-white'
            onClick={() => setIsBookingSidebarOpen(!isBookingSidebarOpen)}>
            Toggle Sidebar
          </button> */}
      </NavigationMenuList>
    </NavigationMenu>
    // </div>
  )
}
