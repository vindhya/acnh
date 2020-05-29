import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BugForm from 'src/components/BugForm'

const CREATE_BUG_MUTATION = gql`
  mutation CreateBugMutation($input: CreateBugInput!) {
    createBug(input: $input) {
      id
    }
  }
`

const NewBug = () => {
  const [createBug, { loading, error }] = useMutation(CREATE_BUG_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugs())
    },
  })

  const onSave = (input) => {
    createBug({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Bug</h2>
      </header>
      <div className="rw-segment-main">
        <BugForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBug
