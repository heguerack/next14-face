'use client'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import NavImageComponent from './NavImageComponent'
import {
  FacialsNavInfo,
  cocoonNavInfo,
  laserHairRemovalNavInfo,
  massagesNavInfo,
  microneedlingNavInfo,
  tatooRemovalNavInfo,
} from '@/data/services'

export default function Navbar() {
  return (
    <NavigationMenu className=' '>
      <NavigationMenuList className=' w-[100vw] flex-wrap gap-4'>
        <NavImageComponent navCompInfo={FacialsNavInfo} />
        <NavImageComponent navCompInfo={massagesNavInfo} />
        <NavImageComponent navCompInfo={microneedlingNavInfo} />
        <NavImageComponent navCompInfo={laserHairRemovalNavInfo} />
        <NavImageComponent navCompInfo={cocoonNavInfo} />
        <NavImageComponent navCompInfo={tatooRemovalNavInfo} />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
