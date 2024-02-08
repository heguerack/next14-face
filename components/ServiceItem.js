'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { TimerIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default function ServiceItem({ title, cost, time, href, children }) {
  // console.log(title, cost, time, href)
  const [showContent, setShowContent] = useState(false)
  return (
    <li className={`py-6  `}>
      <div className='text-base font-medium leading-none mb-4'>{title}</div>
      {/* {showContent && ( */}
      <div className='text-sm flex items-center gap-4 mb-4 '>
        <Button variant='outline' size='sm'>
          <Link
            href={href}
            // className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          >
            Book Now
          </Link>
        </Button>

        <div className=''>{`${cost}`}</div>
        <div className=' flex items-center '>
          <TimerIcon className='h-4 w- mr-0' />
          {`${time}`}
        </div>
      </div>
      {/* )} */}
      <p
        className={`${
          showContent ? '' : 'line-clamp-1'
        } leading-snug text-muted-foreground mb-3`}>
        {children}
      </p>
      <Button
        className='mr-6 px-2'
        size='sm'
        variant='outline'
        onClick={() => {
          setShowContent(!showContent)
        }}>
        {showContent ? 'Read Less' : 'Read More'}
      </Button>
      {showContent && (
        <Button variant='outline' size='sm'>
          <Link
            href={href}
            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
            Book Now
          </Link>
        </Button>
      )}

      {/* {showContent && <Separator className=' my-8 mt-12' />} */}
      <Separator className='mt-8 mb-0' />
    </li>
  )
}
