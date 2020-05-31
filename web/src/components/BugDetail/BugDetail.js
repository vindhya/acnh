import { Link, routes } from '@redwoodjs/router'

import { MONTHS } from 'src/constants'

const BugDetail = ({ bug }) => {
  const monthsNorth = JSON.parse(bug.monthsNorthHemi)
  const monthsSouth = JSON.parse(bug.monthsSouthHemi)

  return (
    <article>
      <header>
        <h2>
          <Link to={routes.bugDetail({ id: bug.id })}>{bug.name}</Link>
        </h2>
      </header>
      <img src={bug.image} />
      <div>Price: {bug.price}</div>
      <div>Location: {bug.location}</div>
      <div>
        Time of Day: {bug.timeStart} - {bug.timeEnd}
        {bug.timeStartAlt && (
          <span>
            , {bug.timeStartAlt} - {bug.timeEndAlt}
          </span>
        )}
      </div>
      <div>
        Months Available (Northern Hemisphere):{' '}
        {monthsNorth.map((monthNum) => (
          <span key={monthNum}>{MONTHS[monthNum]}, </span>
        ))}
      </div>
      <div>
        Months Available (Southern Hemisphere):{' '}
        {monthsSouth.map((monthNum) => (
          <span key={monthNum}>{MONTHS[monthNum]}, </span>
        ))}
      </div>
    </article>
  )
}

export default BugDetail
