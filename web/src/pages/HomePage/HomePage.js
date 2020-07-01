import { useContext } from 'react'
import MainLayout from 'src/layouts/MainLayout'
import CritterListCell from 'src/components/CritterListCell'

import { HemisphereContext } from 'src/context/HemisphereProvider'
import { HEMISPHERES } from 'src/constants'

const HomePage = () => {
  const [hemisphere, setHemisphere] = useContext(HemisphereContext)

  return (
    <MainLayout>
      <div>
        You&apos;re in the <strong>{hemisphere} hemisphere</strong> right now!
        But, feel free to check out another one:
      </div>
      <button onClick={() => setHemisphere(HEMISPHERES.NORTH)}>
        Northern Hemisphere
      </button>
      <button onClick={() => setHemisphere(HEMISPHERES.SOUTH)}>
        Southern Hemisphere
      </button>
      <CritterListCell />
    </MainLayout>
  )
}

export default HomePage
