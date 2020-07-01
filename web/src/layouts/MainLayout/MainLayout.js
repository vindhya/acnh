import { Link, routes } from '@redwoodjs/router'

import ChevronDownIcon from 'src/assets/chevron-down-solid.svg'
import './MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="max-w-screen-xl mx-auto pt-20 pb-12">
        <h1 className="text-3xl">
          <Link to={routes.home()}>Animal Crossing: New Horizons</Link>
        </h1>
        <h2 className="text-6xl">Critters you can catch right now</h2>
        <ChevronDownIcon className="icon w-12 mt-4" />
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
