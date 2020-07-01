import { useAuth } from '@redwoodjs/auth'
import MainLayout from 'src/layouts/MainLayout'

const SecretPage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <MainLayout>
      <button href="#" onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {isAuthenticated && <div>Logged In User: {currentUser.email}</div>}
    </MainLayout>
  )
}

export default SecretPage
