import { Link, routes } from '@redwoodjs/router'

const BugCrittersLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.bugCritters()}
            className="rw-link"
          >
            BugCritters
          </Link>
        </h1>
        <Link
          to={routes.newBugCritter()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New BugCritter
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default BugCrittersLayout
