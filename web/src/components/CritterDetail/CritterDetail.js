import { MONTHS } from 'src/constants'

const CritterDetail = ({ critter }) => {
  const {
    id,
    image,
    price,
    shadowSize,
    location,
    timeStart,
    timeEnd,
    timeStartAlt,
    timeEndAlt,
    monthsNorthHemi,
    monthsSouthHemi,
  } = critter
  const monthsNorth = JSON.parse(monthsNorthHemi)
  const monthsSouth = JSON.parse(monthsSouthHemi)

  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <img src={image} />
      <div>Price: {price}</div>
      {shadowSize && <div>Shadow Size: {shadowSize}</div>}
      <div>Location: {location}</div>
      <div>
        Time of Day: {timeStart} - {timeEnd}
        {timeStartAlt && (
          <span>
            , {timeStartAlt} - {timeEndAlt}
          </span>
        )}
      </div>
      <div>
        Months Available (Northern Hemisphere):{' '}
        {monthsNorth.map((monthNum) => (
          <span key={monthNum}>{MONTHS[monthNum]} </span>
        ))}
      </div>
      <div>
        Months Available (Southern Hemisphere):{' '}
        {monthsSouth.map((monthNum) => (
          <span key={monthNum}>{MONTHS[monthNum]} </span>
        ))}
      </div>
    </article>
  )
}

export default CritterDetail
