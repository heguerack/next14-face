import HomeReviews from '@/components/HomeComponents/HomeReviews'
import HomeServices from '@/components/HomeComponents/HomeServices'
import HomeShowcase from '@/components/HomeComponents/HomeShowcase'

export default function HomePage() {
  return (
    <>
      <HomeShowcase />
      <HomeServices />
      <HomeReviews />
      {/* <HomeAllServices />  */}
    </>
  )
}
