import { useContext } from 'react'
import BugDetail from 'src/components/BugDetail'

import { HemisphereContext } from 'src/context/HemisphereProvider'
import {
  critterFilter,
  inTimeRange,
  inMonthRange,
} from 'src/services/critterFilter'
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

export const Success = ({ bugs }) =>
  critterFilter(bugs, new Date()).map((bug) => (
    <BugDetail key={bug.id} bug={bug} />
  ))
