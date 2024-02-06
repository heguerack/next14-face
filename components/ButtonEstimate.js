import { Calendar, CalendarCheck } from 'lucide-react'
import Link from 'next/link'
import ButtonEstimateWrapper from './ButtonEstimateWrapper'
// import { FcCalendar } from 'react-icons/fc'

export default function ButtonEstimate() {
  return (
    <ButtonEstimateWrapper>
      <div
        className='custom-pulse-animation justify-center flex items-center gap-2
        my-2 py-2 px-4 text-white rounded-3xl
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-sky-500 to-blue-900 '>
        {/* <FcCalendar className='text-4xl md:text-6xl' /> */}
        <CalendarCheck />
        <span className='text-lg md:text-2xl'>BOOK ESTIMATE</span>
      </div>
    </ButtonEstimateWrapper>
  )
}
