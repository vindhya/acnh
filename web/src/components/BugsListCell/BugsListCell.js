import { useContext } from 'react'
import BugDetail from 'src/components/BugDetail'

import { HemisphereContext } from 'src/context/HemisphereProvider'
import { inTimeRange, inMonthRange } from 'src/utils'
import { HEMISPHERES } from 'src/constants'

export const QUERY = gql`
  query {
    bugs: bugCritters {
      id
      name
      image
      price
      location
      timeStart
      timeEnd
      monthsNorthHemi
      monthsSouthHemi
      timeStartAlt
      timeEndAlt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ bugs }) => {
  const [hemisphere, setHemisphere] = useContext(HemisphereContext)
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentMonth = currentDate.getMonth()
  console.log('bugs', bugs)

  return bugs
    .filter(
      ({
        timeStart,
        timeEnd,
        timeStartAlt,
        timeEndAlt,
        monthsNorthHemi,
        monthsSouthHemi,
        name,
      }) =>
        inTimeRange(
          currentHour,
          timeStart,
          timeEnd,
          timeStartAlt,
          timeEndAlt
        ) &&
        inMonthRange(
          currentMonth,
          JSON.parse(
            hemisphere === HEMISPHERES.SOUTH ? monthsSouthHemi : monthsNorthHemi
          )
        )
    )
    .map((bug) => <BugDetail key={bug.id} bug={bug} />)
}
