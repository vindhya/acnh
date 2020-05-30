import BugDetail from 'src/components/BugDetail'

export const QUERY = gql`
  query($id: Int!) {
    bug(id: $id) {
      id
      name
      image
      price
      timeStart
      timeEnd
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ bug }) => <BugDetail bug={bug} />
