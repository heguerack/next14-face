import Image from 'next/image'
import ListItem from './ListItem'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function NavImageComponent({ navCompInfo }) {
  return (
    <NavigationMenuItem>
      {/* most of the styles seem easier from the ui itself */}
      <NavigationMenuTrigger className='flex items-center justify-center px-2 '>
        {/* <div className='relative w-[1.2rem] h-[1.2rem]  '>
          <Image
            src={navCompInfo.img}
            alt={navCompInfo.alt}
            className='object-cover '
            fill
          />
        </div> */}
        {navCompInfo.category}
      </NavigationMenuTrigger>
      <NavigationMenuContent className=' '>
        <ul>
          <li className=''>
            <NavigationMenuLink>
              <div
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md'
                href='/'>
                <div className=''>
                  {/* <div className=' text-2xl text-center font-medium'>
                    {navCompInfo.introTitle}
                  </div> */}
                  <div className='flex items-center gap-2'>
                    <div className='relative w-[10rem] h-[5rem]  '>
                      <Image
                        src={navCompInfo.img}
                        alt=''
                        className='object-cover '
                        fill
                      />
                    </div>
                    <p className='text-lg leading-tight text-muted-foreground'>
                      {navCompInfo.introDesc}
                    </p>
                  </div>
                </div>
              </div>
              {navCompInfo.categoryServices.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}>
                  {service.description}
                </ListItem>
              ))}
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
