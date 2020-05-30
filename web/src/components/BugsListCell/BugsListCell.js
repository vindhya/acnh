import BugDetail from 'src/components/BugDetail'

export const QUERY = gql`
  query {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ bugs }) =>
  bugs.map((bug) => <BugDetail key={bug.id} bug={bug} />)
