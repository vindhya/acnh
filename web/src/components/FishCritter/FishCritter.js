import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FISH_CRITTER_MUTATION = gql`
  mutation DeleteFishCritterMutation($id: Int!) {
    deleteFishCritter(id: $id) {
      id
    }
  }
`

const FishCritter = ({ fishCritter }) => {
  const [deleteFishCritter] = useMutation(DELETE_FISH_CRITTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.fishCritters())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fishCritter ' + id + '?')) {
      deleteFishCritter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">FishCritter {fishCritter.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{fishCritter.id}</td>
            </tr><tr>
              <th>name</th>
              <td>{fishCritter.name}</td>
            </tr><tr>
              <th>image</th>
              <td>{fishCritter.image}</td>
            </tr><tr>
              <th>price</th>
              <td>{fishCritter.price}</td>
            </tr><tr>
              <th>location</th>
              <td>{fishCritter.location}</td>
            </tr><tr>
              <th>timeStart</th>
              <td>{fishCritter.timeStart}</td>
            </tr><tr>
              <th>timeEnd</th>
              <td>{fishCritter.timeEnd}</td>
            </tr><tr>
              <th>monthsNorthHemi</th>
              <td>{fishCritter.monthsNorthHemi}</td>
            </tr><tr>
              <th>monthsSouthHemi</th>
              <td>{fishCritter.monthsSouthHemi}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFishCritter({ id: fishCritter.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fishCritter.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default FishCritter
