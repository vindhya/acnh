import BugDetail from 'src/components/BugDetail'

import { critterFilter } from 'src/services/critterFilter'

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
