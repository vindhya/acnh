import { Link, routes } from '@redwoodjs/router'

import ChevronDownIcon from 'src/assets/chevron-down-solid.svg'

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="max-w-screen-xl mx-auto pt-20 pb-12">
        <h1 className="color-paragraph text-2xl">
          <Link to={routes.home()}>Animal Crossing: New Horizons</Link>
        </h1>
        <h2 className="color-headline-dark text-5xl font-black">
          Critters you can catch right now
        </h2>
        <ChevronDownIcon className="color-accent w-10 mt-4" />
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
