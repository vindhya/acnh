import { useState } from 'react'

import { HEMISPHERES, LOCALSTORAGE_HEMI } from 'src/constants'

const initialHemi = localStorage.getItem(LOCALSTORAGE_HEMI) || HEMISPHERES.NORTH
export const HemisphereContext = React.createContext(initialHemi)

localStorage.setItem(LOCALSTORAGE_HEMI, initialHemi)

const HemisphereProvider = ({ children }) => {
  const [hemisphere, setHemisphere] = useState(initialHemi)

  const setHemiAndLocalStorage = (newHemi) => {
    setHemisphere(newHemi)
    localStorage.setItem(LOCALSTORAGE_HEMI, newHemi)
  }

  return (
    <HemisphereContext.Provider value={[hemisphere, setHemiAndLocalStorage]}>
      {children}
    </HemisphereContext.Provider>
  )
}

export default HemisphereProvider
