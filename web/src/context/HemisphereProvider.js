import { useState } from 'react'

export const HemisphereContext = React.createContext('north')

const HemisphereProvider = ({ children }) => {
  const [hemisphere, setHemisphere] = useState('north')
  return (
    <HemisphereContext.Provider value={[hemisphere, setHemisphere]}>
      {children}
    </HemisphereContext.Provider>
  )
}

export default HemisphereProvider
