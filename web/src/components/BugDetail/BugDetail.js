import { Link, routes } from '@redwoodjs/router'

const BugDetail = ({ bug }) => {
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
      </div>
    </article>
  )
}

export default BugDetail
