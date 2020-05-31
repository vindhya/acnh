import BugDetail from 'src/components/BugDetail'

import { inTimeRange } from 'src/utils'

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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ bugs }) => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  return bugs
    .filter(
      ({
        timeStart,
        timeEnd,
        timeStartAlt,
        timeEndAlt,
        monthsNorthHemi,
        monthsSouthHemi,
      }) => inTimeRange(18, timeStart, timeEnd, timeStartAlt, timeEndAlt)
    )
    .map((bug) => <BugDetail key={bug.id} bug={bug} />)
}
