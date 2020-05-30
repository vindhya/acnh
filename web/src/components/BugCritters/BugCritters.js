import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_BUG_CRITTER_MUTATION = gql`
  mutation DeleteBugCritterMutation($id: Int!) {
    deleteBugCritter(id: $id) {
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

const BugCrittersList = ({ bugCritters }) => {
  const [deleteBugCritter] = useMutation(DELETE_BUG_CRITTER_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bugCritter ' + id + '?')) {
      deleteBugCritter({ variables: { id }, refetchQueries: ['BUG_CRITTERS'] })
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
            <th>monthsNorthHemi</th>
            <th>monthsSouthHemi</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bugCritters.map((bugCritter) => (
            <tr key={bugCritter.id}>
              <td>{truncate(bugCritter.id)}</td>
              <td>{truncate(bugCritter.name)}</td>
              <td>{truncate(bugCritter.image)}</td>
              <td>{truncate(bugCritter.price)}</td>
              <td>{truncate(bugCritter.location)}</td>
              <td>{truncate(bugCritter.timeStart)}</td>
              <td>{truncate(bugCritter.timeEnd)}</td>
              <td>{truncate(bugCritter.monthsNorthHemi)}</td>
              <td>{truncate(bugCritter.monthsSouthHemi)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.bugCritter({ id: bugCritter.id })}
                    title={'Show bugCritter ' + bugCritter.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBugCritter({ id: bugCritter.id })}
                    title={'Edit bugCritter ' + bugCritter.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete bugCritter ' + bugCritter.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bugCritter.id)}
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

export default BugCrittersList
