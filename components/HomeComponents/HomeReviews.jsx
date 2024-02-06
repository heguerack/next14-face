'use client'
import Script from 'next/script'

import { useInView } from 'react-cool-inview'
export default function HomeReviews() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '1000px',
  })
  return (
    <div className='placeholder google-iframe-wrapper' ref={observe}>
      {inView && (
        <div>
          <p className='text-2xl text-center m-6'>Our Google Reviews!</p>
          <Script src='https://apps.elfsight.com/p/platform.js' />
          <div class='elfsight-app-2e79097a-4bc8-441d-88f2-316095540b86'></div>
        </div>
        // <>
        //   <div className='elfsight-app-2e79097a-4bc8-441d-88f2-316095540b86 google-iframe'></div>
        // </>
      )}
      {/* <Script src='https://apps.elfsight.com/p/platform.js'></Script> */}
    </div>
  )
}
//   return (
//     <div className='bottom-[4rem]'>
//       <GoogleIframe />
//     </div>
//     <div>
//       <p className='text-2xl text-center m-6'>Our Google Reviews!</p>
//       <Script src='https://apps.elfsight.com/p/platform.js' />
//       <div class='elfsight-app-2e79097a-4bc8-441d-88f2-316095540b86'></div>
//     </div>
//   )
// }
