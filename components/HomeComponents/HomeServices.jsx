import { tabs } from '@/data/servicesData'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeServices() {
  // console.log(tabs)
  return (
    <div className='flex gap-2 flex-wrap px-2 justify-center py-8 w-full bg-slate-500'>
      {tabs.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className='relative w-[45%] h-[10rem]  md:h-[20rem] box-border'>
          <Image src={item.img} fill className='object-cover ' />
          <div className='absolute top-0 left-0  w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.0)] '>
            <div className=''>
              <h3 className='text-white text-center '>{item.category} Page</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
