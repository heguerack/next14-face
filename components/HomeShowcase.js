import Image from 'next/image'
import ButtonEstimate from './ButtonEstimate'

export default function HomeShowcase() {
  return (
    <div className='relative  w-full h-[calc(100vh-5rem)]  bg-blue-50 '>
      <div className=' h-full w-full'>
        <Image
          fill
          src={'/images/homeshowcaseimg.jpg'}
          className='object-cover '
        />
      </div>
      <div className='absolute top-0 left-0  bg-[rgba(0,0,0,0.7)] h-full w-full flex flex-col items-center justify-center gap-16 text-white'>
        <h1 className='flex flex-col items-center justify-center gap-4 text-xl font-semibold '>
          <span>Calgary's</span>
          <span>Premier Facials and Massages</span>
          <span>Wellness Centre</span>
        </h1>
        <ButtonEstimate />
      </div>
    </div>
  )
}
