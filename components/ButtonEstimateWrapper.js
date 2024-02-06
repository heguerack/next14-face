'use client'

import { useGlogalContext } from '@/lib/Context'

export default function ButtonEstimateWrapper({ children }) {
  const { isBookingSidebarOpen, setIsBookingSidebarOpen } = useGlogalContext()
  console.log(isBookingSidebarOpen)
  return (
    <div onClick={() => setIsBookingSidebarOpen(!isBookingSidebarOpen)}>
      {children}
    </div>
  )
}
