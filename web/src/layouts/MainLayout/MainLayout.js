import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const MainLayout = ({ children }) => {
  const { logIn } = useAuth()

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
            <li>
              <a href="#" onClick={logIn}>
                Log In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
