import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const MainLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

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
              <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
