import BugDetail from 'src/components/BugDetail'

import { inTimeRange, inMonthRange } from 'src/utils'

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
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentMonth = currentDate.getMonth()

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
        ) && inMonthRange(currentMonth, JSON.parse(monthsNorthHemi))
    )
    .map((bug) => <BugDetail key={bug.id} bug={bug} />)
}
