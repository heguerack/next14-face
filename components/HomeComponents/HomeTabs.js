'use client'
import { servicesData } from '@/data/servicesData'
import { Button } from '../ui/button'
import { useState } from 'react'
import Image from 'next/image'
import ServiceItem from '../ServiceItem'

export default function HomeTabs() {
  const [index, setIndex] = useState(0)
  console.log(index)
  return (
    <div className={`w-fullleft-0 `}>
      <div className=' bg-red-200 flex flex-wrap justify-center gap-2 py-4'>
        {servicesData.map((item, i) => (
          <Button
            onClick={() => setIndex(i)}
            size='sm'
            key={i}
            variant={`${i === index ? 'default' : 'outline'}`}>
            {item.category}
          </Button>
        ))}
      </div>
      <div className='max-h-[55vh] overflow-y-scroll'>
        <div className='overflow-y-scroll'>
          <div className='flex h-full w-full select-none flex-col justify-end rounded-md  p-2 no-underline outline-none focus:shadow-md'>
            <div className='bg-slate-500 text-white flex items-center gap-2'>
              <div className='relative w-[10rem] h-[5rem]  '>
                <Image
                  src={servicesData[index].img}
                  alt={servicesData[index].alt}
                  className='object-cover '
                  fill
                />
              </div>
              <p className='text-lg leading-tight '>
                {servicesData[index].desc}
              </p>
            </div>
            <div>
              <ul>
                {servicesData[index].categoryServices.map(
                  (service, serviceIndex) => {
                    // console.log(service)
                    return (
                      <ServiceItem
                        key={serviceIndex}
                        title={service.title}
                        href={service.href}
                        cost={service.cost}
                        time={service.time}>
                        {service.description}
                      </ServiceItem>
                    )
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//  <ul>
//    {servicesData.map(item)}
//    <li>
//      <div
//        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md'
//        href='/'>
//        <div className='flex items-center gap-2'>
//          <div className='relative w-[10rem] h-[5rem]  '>
//            <Image src='' alt='' className='object-cover ' fill />
//          </div>
//          <p className='text-lg leading-tight text-muted-foreground'>{}</p>
//        </div>
//      </div>
//    </li>
//  </ul>
