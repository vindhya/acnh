import { Link, routes } from '@redwoodjs/router'
import FishCritters from 'src/components/FishCritters'

export const QUERY = gql`
  query FISH_CRITTERS {
    fishCritters {
      id
      name
      image
      price
      location
      shadowSize
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
      {'No fishCritters yet. '}
      <Link to={routes.newFishCritter()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ fishCritters }) => {
  return <FishCritters fishCritters={fishCritters} />
}
