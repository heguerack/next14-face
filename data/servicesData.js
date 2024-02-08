import { bodySkinData } from './sevicesData/bodySkin'
import { FacialsData } from './sevicesData/facials'
import { cocoonData } from './sevicesData/cocoon'
import { laserHairRemovalData } from './sevicesData/laserHair'
import { massagesData } from './sevicesData/massages'
import { microneedlingData } from './sevicesData/microneedling'
import { tattooRemovalData } from './sevicesData/tattoo'

export const servicesData = [
  FacialsData,
  massagesData,
  microneedlingData,
  laserHairRemovalData,
  cocoonData,
  tattooRemovalData,
  bodySkinData,
]
// console.log(massagesData)
export const tabs = servicesData.map((item) => {
  return {
    category: item.category,
    desc: item.desc,
    img: item.img,
    alt: item.alt,
    url: item.url,
  }
})

// console.log(tabs)
