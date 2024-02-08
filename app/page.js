import HomeReviews from '@/components/HomeComponents/HomeReviews'
import HomeServices from '@/components/HomeComponents/HomeServices'
import HomeShowcase from '@/components/HomeComponents/HomeShowcase'
import HomeTabs from '@/components/HomeComponents/HomeTabs'

export default function HomePage() {
  return (
    <>
      <HomeShowcase />
      <HomeTabs />
      <HomeReviews />
      <HomeServices />
      {/* <HomeAllServices />  */}
    </>
  )
}
