import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_FISH_CRITTER_MUTATION = gql`
  mutation DeleteFishCritterMutation($id: Int!) {
    deleteFishCritter(id: $id) {
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

const FishCrittersList = ({ fishCritters }) => {
  const [deleteFishCritter] = useMutation(DELETE_FISH_CRITTER_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fishCritter ' + id + '?')) {
      deleteFishCritter({ variables: { id }, refetchQueries: ['FISH_CRITTERS'] })
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
          {fishCritters.map((fishCritter) => (
            <tr key={fishCritter.id}>
              <td>{truncate(fishCritter.id)}</td>
              <td>{truncate(fishCritter.name)}</td>
              <td>{truncate(fishCritter.image)}</td>
              <td>{truncate(fishCritter.price)}</td>
              <td>{truncate(fishCritter.location)}</td>
              <td>{truncate(fishCritter.timeStart)}</td>
              <td>{truncate(fishCritter.timeEnd)}</td>
              <td>{truncate(fishCritter.monthsNorthHemi)}</td>
              <td>{truncate(fishCritter.monthsSouthHemi)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.fishCritter({ id: fishCritter.id })}
                    title={'Show fishCritter ' + fishCritter.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFishCritter({ id: fishCritter.id })}
                    title={'Edit fishCritter ' + fishCritter.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete fishCritter ' + fishCritter.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fishCritter.id)}
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

export default FishCrittersList
