import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Animal Crossing: New Horizons</Link>
        </h1>
        <nav>
          <ul>
            <li>{/* <Link to={routes.bugs()}>Bugs</Link> */}</li>
            <li>{/* <Link to={routes.fish()}>Fish</Link> */}</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
