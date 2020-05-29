import { Link, routes } from '@redwoodjs/router'

const BugsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.bugs()}
            className="rw-link"
          >
            Bugs
          </Link>
        </h1>
        <Link
          to={routes.newBug()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Bug
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default BugsLayout
