import { Link, routes } from '@redwoodjs/router'
import BugCritters from 'src/components/BugCritters'

export const QUERY = gql`
  query BUG_CRITTERS {
    bugCritters {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bugCritters yet. '}
      <Link to={routes.newBugCritter()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ bugCritters }) => {
  return <BugCritters bugCritters={bugCritters} />
}
