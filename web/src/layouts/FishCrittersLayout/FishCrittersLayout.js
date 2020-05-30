import { Link, routes } from '@redwoodjs/router'

const FishCrittersLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.fishCritters()}
            className="rw-link"
          >
            FishCritters
          </Link>
        </h1>
        <Link
          to={routes.newFishCritter()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New FishCritter
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default FishCrittersLayout
