'use client'

import * as React from 'react'
import { X } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import BookingSidebarItem from './BookingSidebarItem'
import { useGlogalContext } from '@/lib/Context'
import { FacialsNavInfo } from '@/data/sevicesData/facials'
import { massagesNavInfo } from '@/data/sevicesData/massages'
import { microneedlingNavInfo } from '@/data/sevicesData/microneedling'
import { laserHairRemovalNavInfo } from '@/data/sevicesData/laserHair'
import { cocoonNavInfo } from '@/data/sevicesData/cocoon'
import { tatooRemovalNavInfo } from '@/data/sevicesData/tatoo'
import { bodySkin } from '@/data/sevicesData/bodySkin'

export function BookingSidebar() {
  const { isBookingSidebarOpen, setIsBookingSidebarOpen } = useGlogalContext()
  console.log(isBookingSidebarOpen)

  return (
    <div
      className={`fixed  top-0 w-full left-0 bg-[rgba(0,0,0,.8)] min-h-screen overflow-y-scroll  ${
        isBookingSidebarOpen
          ? 'transition-opacity opacity-100 visible duration-1000  z-20   '
          : 'invisible  opacity-0  '
      } `}>
      <div className='flex justify-end  m-4 rounded'>
        <X
          className='h-6 w-6 bg-slate-500 rounded text-white'
          onClick={() => setIsBookingSidebarOpen(false)}
        />
      </div>

      <NavigationMenu>
        <NavigationMenuList className='flex flex-wrap gap-4 py-2'>
          <BookingSidebarItem navCompInfo={FacialsNavInfo} />
          <BookingSidebarItem navCompInfo={massagesNavInfo} />
          <BookingSidebarItem navCompInfo={microneedlingNavInfo} />
          <BookingSidebarItem navCompInfo={laserHairRemovalNavInfo} />
          <BookingSidebarItem navCompInfo={cocoonNavInfo} />
          <BookingSidebarItem navCompInfo={tatooRemovalNavInfo} />
          <BookingSidebarItem navCompInfo={bodySkin} />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
