import FishCritter from 'src/components/FishCritter'

export const QUERY = gql`
  query FIND_FISH_CRITTER_BY_ID($id: Int!) {
    fishCritter: fishCritter(id: $id) {
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

export const Empty = () => <div>FishCritter not found</div>

export const Success = ({ fishCritter }) => {
  return <FishCritter fishCritter={fishCritter} />
}
