import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import Link from 'next/link'
export default function ListItem({ className, title, children, ...props }) {
  // ref
  return (
    <li className='p-4'>
      <div className='text-base font-medium leading-none'>{title}</div>
      <p className='line-clamp-2  leading-snug text-muted-foreground mb-2'>
        {children}
      </p>
      <NavigationMenuLink className='bg-red-500'>
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
