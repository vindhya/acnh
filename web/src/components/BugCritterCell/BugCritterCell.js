import BugCritter from 'src/components/BugCritter'

export const QUERY = gql`
  query FIND_BUG_CRITTER_BY_ID($id: Int!) {
    bugCritter: bugCritter(id: $id) {
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

export const Empty = () => <div>BugCritter not found</div>

export const Success = ({ bugCritter }) => {
  return <BugCritter bugCritter={bugCritter} />
}
