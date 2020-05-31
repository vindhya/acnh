import { Link, routes } from '@redwoodjs/router'

import { months } from 'src/constants'

const BugDetail = ({ bug }) => {
  const monthsData = JSON.parse(bug.monthsNorthHemi)

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
        Months Available:{' '}
        {monthsData.map((monthNum) => (
          <span key={monthNum}>{months[monthNum]}, </span>
        ))}
      </div>
    </article>
  )
}

export default BugDetail
