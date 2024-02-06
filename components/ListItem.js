'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useState } from 'react'
import { DollarSignIcon, TimerIcon, WatchIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ListItem({
  className,
  title,
  cost,
  time,
  children,
  ...props
}) {
  // ref
  const [showContent, setShowContent] = useState(false)

  return (
    // <li className={`p-4 ${showContent ? 'mb-12' : ''}`}>
    <li className={`p-4 mb-4`}>
      {showContent && (
        <div className='text-base flex items-center gap-4 mb-4'>
          <NavigationMenuLink className=''>
            <Button variant='secondary' size='sm'>
              <Link
                className={cn(
                  'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  className
                )}
                {...props}>
                {/* <div></div> */}
                Book Now
              </Link>
            </Button>
          </NavigationMenuLink>
          <div className=''>{`${cost}`}</div>
          <div className=' flex items-center'>
            <TimerIcon className='h-4 w- mr-1' />
            {`${time}`}
          </div>
        </div>
      )}
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
        {showContent ? 'Read Less' : 'Read More'}
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
      {showContent && <Separator className=' my-8 mt-12' />}
    </li>
  )
}
