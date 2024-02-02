import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Facials, Massages } from '@/data/services'
import ListItem from './ListItem'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

export default function NavMassage() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Massages</NavigationMenuTrigger>
      <NavigationMenuContent className=''>
        {/* <NavigationMenuLink></NavigationMenuLink> */}
        <ul>
          <li className=''>
            <NavigationMenuLink>
              <div
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md'
                href='/'>
                {/* <Icons.logo className='h-6 w-6' /> */}
                <div className=''>
                  <div className=' text-2xl text-center font-medium'>Intro</div>
                  <p className='text-lg leading-tight text-muted-foreground'>
                    Discover a haven of tranquility in Calgary at Face and Body
                    Wellness Centre.<span>..</span> <button>Learn more</button>
                    <span className='hidden'>
                      Our expert estheticians invite you to experience
                      personalized facials designed to revitalize your skin and
                      rejuvenate your senses. Nestled in the heart of Calgary,
                      our center offers a serene escape where you can unwind and
                      indulge in a range of facial treatments tailored to your
                      unique needs. Trust us to bring a touch of radiance to
                      your skin, providing a sanctuary for beauty and well-being
                      right here in Calgary. Elevate your skincare journey with
                      Face and Body Wellness Centre – where Calgary
                    </span>
                    meets serenity.
                  </p>
                </div>
              </div>
              {Massages.map((massage) => (
                <ListItem
                  key={massage.title}
                  title={massage.title}
                  href={massage.href}>
                  {massage.description}
                </ListItem>
              ))}
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
