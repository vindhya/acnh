import Bug from 'src/components/Bug'

export const QUERY = gql`
  query FIND_BUG_BY_ID($id: Int!) {
    bug: bug(id: $id) {
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

export const Empty = () => <div>Bug not found</div>

export const Success = ({ bug }) => {
  return <Bug bug={bug} />
}
