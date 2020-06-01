export const QUERY = gql`
  query {
    bugs: bugCritters {
      id
      name
      image
      location
      price
      timeStart
      timeEnd
      monthsNorthHemi
      monthsSouthHemi
      timeStartAlt
      timeEndAlt
    }
    fish: fishCritters {
      id
      name
      image
      location
      price
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ critterList }) => {
  return JSON.stringify(critterList)
}
