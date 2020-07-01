import { useContext } from 'react'
import MainLayout from 'src/layouts/MainLayout'
import CritterListCell from 'src/components/CritterListCell'

import { HemisphereContext } from 'src/context/HemisphereProvider'
import { HEMISPHERES } from 'src/constants'
import { oppositeHemi } from 'src/services/oppositeHemi'

const textHemi = (hemisphere) =>
  hemisphere === HEMISPHERES.NORTH ? 'northern' : 'southern'

const HomePage = () => {
  const [hemisphere, toggleHemisphere] = useContext(HemisphereContext)

  return (
    <MainLayout>
      <div>
        You&apos;re looking at creatures in the{' '}
        <strong className="capitalize">
          {textHemi(hemisphere)} hemisphere
        </strong>
        . Do you want to switch to the{' '}
        <button
          onClick={() => toggleHemisphere()}
          className="capitalize underline"
        >
          {textHemi(oppositeHemi(hemisphere))} hemisphere
        </button>
        ?
      </div>
      <CritterListCell />
    </MainLayout>
  )
}

export default HomePage
