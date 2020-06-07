import CritterDetail from 'src/components/CritterDetail'

import { critterFilter } from 'src/services/critterFilter'
import { orderDescPrice } from 'src/services/orderCritters'

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

export const Success = ({ bugs, fish }) => {
  const currentDate = new Date()
  const availableBugs = critterFilter(bugs, currentDate)
  const availableFish = critterFilter(fish, currentDate)
  const orderedCritters = orderDescPrice(availableBugs, availableFish)

  return orderedCritters.map((critter) => (
    <CritterDetail key={critter.id + critter.__typename} critter={critter} />
  ))
}
