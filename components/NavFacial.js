import { Facials } from '@/data/services'
import ListItem from './ListItem'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function NavFacial() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Facials</NavigationMenuTrigger>
      <NavigationMenuContent className='w-[100vw]'>
        <ul className=''>
          <li className=''>
            <NavigationMenuLink>
              <div
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 py-3 no-underline outline-none focus:shadow-md'
                href='/'>
                {/* <Icons.logo className='h-6 w-6' /> */}
                <div className=''>
                  <div className=' text-lg font-medium text-center mb-1 '>
                    About Facials
                  </div>
                  <p className=' leading-tight tesx-base text-muted-foreground'>
                    We offer the best facial treatments in town. see below
                  </p>
                </div>
              </div>
              {Facials.map((facial) => (
                <ListItem
                  className='p-2'
                  key={facial.title}
                  title={facial.title}
                  href={facial.href}>
                  {facial.description}
                </ListItem>
              ))}
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
