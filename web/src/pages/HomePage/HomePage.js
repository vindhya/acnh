import { useContext } from 'react'
import MainLayout from 'src/layouts/MainLayout'
import BugsListCell from 'src/components/BugsListCell'

import { HemisphereContext } from 'src/context/HemisphereProvider'

const HomePage = () => {
  const [hemisphere, setHemisphere] = useContext(HemisphereContext)
  console.log('hemisphere', hemisphere)
  //todo: wire up context with hemisphere buttons below

  return (
    <MainLayout>
      <div>homepage</div>
      <button>Northern Hemisphere</button>
      <button>Southern Hemisphere</button>
      <BugsListCell />
    </MainLayout>
  )
}

export default HomePage
