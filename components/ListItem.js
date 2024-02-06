'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useState } from 'react'
export default function ListItem({ className, title, children, ...props }) {
  // ref
  const [showContent, setShowContent] = useState(false)

  return (
    <li className='p-4'>
      <div className='text-base font-medium leading-none mb-2'>{title}</div>
      <p
        className={`${
          showContent ? '' : 'line-clamp-1'
        } leading-snug text-muted-foreground mb-3`}>
        {children}
      </p>
      <Button
        className='mr-6'
        variant='outline'
        onClick={() => {
          setShowContent(!showContent)
          // setKey(title)
        }}>
        Read more
      </Button>
      <NavigationMenuLink className=''>
        <Button variant='outline'>
          <Link
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}>
            Book Now
          </Link>
        </Button>
      </NavigationMenuLink>
    </li>
  )
}
