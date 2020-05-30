import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BugCritterForm from 'src/components/BugCritterForm'

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
const UPDATE_BUG_CRITTER_MUTATION = gql`
  mutation UpdateBugCritterMutation($id: Int!, $input: UpdateBugCritterInput!) {
    updateBugCritter(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ bugCritter }) => {
  const [updateBugCritter, { loading, error }] = useMutation(UPDATE_BUG_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugCritters())
    },
  })

  const onSave = (input, id) => {
    updateBugCritter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit BugCritter {bugCritter.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BugCritterForm bugCritter={bugCritter} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
