import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BugCritterForm from 'src/components/BugCritterForm'

const CREATE_BUG_CRITTER_MUTATION = gql`
  mutation CreateBugCritterMutation($input: CreateBugCritterInput!) {
    createBugCritter(input: $input) {
      id
    }
  }
`

const NewBugCritter = () => {
  const [createBugCritter, { loading, error }] = useMutation(CREATE_BUG_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugCritters())
    },
  })

  const onSave = (input) => {
    createBugCritter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BugCritter</h2>
      </header>
      <div className="rw-segment-main">
        <BugCritterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBugCritter
