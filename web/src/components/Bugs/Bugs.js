import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_BUG_MUTATION = gql`
  mutation DeleteBugMutation($id: Int!) {
    deleteBug(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const BugsList = ({ bugs }) => {
  const [deleteBug] = useMutation(DELETE_BUG_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bug ' + id + '?')) {
      deleteBug({ variables: { id }, refetchQueries: ['BUGS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>location</th>
            <th>timeStart</th>
            <th>timeEnd</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.id}>
              <td>{truncate(bug.id)}</td>
              <td>{truncate(bug.name)}</td>
              <td>{truncate(bug.image)}</td>
              <td>{truncate(bug.price)}</td>
              <td>{truncate(bug.location)}</td>
              <td>{truncate(bug.timeStart)}</td>
              <td>{truncate(bug.timeEnd)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.bug({ id: bug.id })}
                    title={'Show bug ' + bug.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBug({ id: bug.id })}
                    title={'Edit bug ' + bug.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete bug ' + bug.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bug.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BugsList
