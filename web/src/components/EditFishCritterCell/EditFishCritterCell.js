import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FishCritterForm from 'src/components/FishCritterForm'

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
const UPDATE_FISH_CRITTER_MUTATION = gql`
  mutation UpdateFishCritterMutation($id: Int!, $input: UpdateFishCritterInput!) {
    updateFishCritter(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ fishCritter }) => {
  const [updateFishCritter, { loading, error }] = useMutation(UPDATE_FISH_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.fishCritters())
    },
  })

  const onSave = (input, id) => {
    updateFishCritter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit FishCritter {fishCritter.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FishCritterForm fishCritter={fishCritter} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
