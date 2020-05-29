import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BugForm from 'src/components/BugForm'

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
const UPDATE_BUG_MUTATION = gql`
  mutation UpdateBugMutation($id: Int!, $input: UpdateBugInput!) {
    updateBug(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ bug }) => {
  const [updateBug, { loading, error }] = useMutation(UPDATE_BUG_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugs())
    },
  })

  const onSave = (input, id) => {
    updateBug({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Bug {bug.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BugForm bug={bug} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
