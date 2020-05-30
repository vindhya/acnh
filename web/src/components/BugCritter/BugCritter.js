import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BUG_CRITTER_MUTATION = gql`
  mutation DeleteBugCritterMutation($id: Int!) {
    deleteBugCritter(id: $id) {
      id
    }
  }
`

const BugCritter = ({ bugCritter }) => {
  const [deleteBugCritter] = useMutation(DELETE_BUG_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.bugCritters())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bugCritter ' + id + '?')) {
      deleteBugCritter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">BugCritter {bugCritter.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{bugCritter.id}</td>
            </tr><tr>
              <th>name</th>
              <td>{bugCritter.name}</td>
            </tr><tr>
              <th>image</th>
              <td>{bugCritter.image}</td>
            </tr><tr>
              <th>price</th>
              <td>{bugCritter.price}</td>
            </tr><tr>
              <th>location</th>
              <td>{bugCritter.location}</td>
            </tr><tr>
              <th>timeStart</th>
              <td>{bugCritter.timeStart}</td>
            </tr><tr>
              <th>timeEnd</th>
              <td>{bugCritter.timeEnd}</td>
            </tr><tr>
              <th>monthsNorthHemi</th>
              <td>{bugCritter.monthsNorthHemi}</td>
            </tr><tr>
              <th>monthsSouthHemi</th>
              <td>{bugCritter.monthsSouthHemi}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBugCritter({ id: bugCritter.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bugCritter.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default BugCritter
