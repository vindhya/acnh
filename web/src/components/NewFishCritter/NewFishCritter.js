import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FishCritterForm from 'src/components/FishCritterForm'

const CREATE_FISH_CRITTER_MUTATION = gql`
  mutation CreateFishCritterMutation($input: CreateFishCritterInput!) {
    createFishCritter(input: $input) {
      id
    }
  }
`

const NewFishCritter = () => {
  const [createFishCritter, { loading, error }] = useMutation(CREATE_FISH_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.fishCritters())
    },
  })

  const onSave = (input) => {
    createFishCritter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FishCritter</h2>
      </header>
      <div className="rw-segment-main">
        <FishCritterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFishCritter
