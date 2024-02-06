// import { HomePageServicesData } from '@/lib/data/treatments'
import { homeServicesData } from '@/data/homeServicesData'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeServices() {
  return (
    <div className='flex gap-2 flex-wrap px-2 justify-center py-8 w-full bg-slate-500'>
      {homeServicesData.map((service, index) => (
        <div
          key={index}
          className='relative w-[45%] h-[10rem]  md:h-[20rem] box-border'>
          <Image src={service.img} fill className='object-cover ' />
          <div className='absolute top-0 left-0  w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.0)] '>
            <Link className='homeServicesCardLink' href={service.href}>
              <h3 className='text-white text-center '>{service.title}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
