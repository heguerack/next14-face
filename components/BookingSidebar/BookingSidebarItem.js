import Image from 'next/image'
import ListItem from './ListItem'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export default function BookingSidebarItem({ category }) {
  return (
    <NavigationMenuItem className=''>
      <NavigationMenuTrigger className=' px-2'>
        {category.category}
      </NavigationMenuTrigger>
      {/* <NavigationMenuContent className='absolute w-[100vw] left-0 top-[8rem]'> */}
      <NavigationMenuContent className='w-[100vw]'>
        <ul>
          <li className=''>
            <NavigationMenuLink asChild>
              <Link
                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md'
                href='/'>
                <div className=''>
                  <div className='flex items-center gap-2'>
                    <div className='relative w-[10rem] h-[5rem]  '>
                      <Image
                        src={category.img}
                        alt=''
                        className='object-cover '
                        fill
                      />
                    </div>
                    <p className='text-lg leading-tight text-muted-foreground'>
                      {category.introDesc}
                    </p>
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
          {category.categoryServices.map((service, i) => (
            <ListItem
              key={i}
              title={service.title}
              href={service.href}
              cost={service.cost}
              time={service.time}>
              {service.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
