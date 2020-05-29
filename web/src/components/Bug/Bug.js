import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BUG_MUTATION = gql`
  mutation DeleteBugMutation($id: Int!) {
    deleteBug(id: $id) {
      id
    }
  }
`

const Bug = ({ bug }) => {
  const [deleteBug] = useMutation(DELETE_BUG_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugs())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bug ' + id + '?')) {
      deleteBug({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Bug {bug.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{bug.id}</td>
            </tr><tr>
              <th>name</th>
              <td>{bug.name}</td>
            </tr><tr>
              <th>image</th>
              <td>{bug.image}</td>
            </tr><tr>
              <th>price</th>
              <td>{bug.price}</td>
            </tr><tr>
              <th>location</th>
              <td>{bug.location}</td>
            </tr><tr>
              <th>timeStart</th>
              <td>{bug.timeStart}</td>
            </tr><tr>
              <th>timeEnd</th>
              <td>{bug.timeEnd}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBug({ id: bug.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bug.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Bug
