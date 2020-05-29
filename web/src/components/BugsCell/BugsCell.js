import { Link, routes } from '@redwoodjs/router'

import Bugs from 'src/components/Bugs'

export const QUERY = gql`
  query BUGS {
    bugs {
      id
      name
      image
      price
      location
      timeStart
      timeEnd
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
      {'No bugs yet. '}
      <Link
        to={routes.newBug()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ bugs }) => {
  return <Bugs bugs={bugs} />
}
