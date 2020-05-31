import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import HemisphereProvider from './context/HemisphereProvider'

netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodProvider>
        <HemisphereProvider>
          <Routes />
        </HemisphereProvider>
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
