import { useContext } from 'react'

import { HemisphereContext } from 'src/context/HemisphereProvider'
import { HEMISPHERES } from 'src/constants'

const checkTime = (currentHour, startingTime, endingTime) => {
  if (startingTime === null || endingTime === null) {
    return false
  } else if (startingTime === endingTime) {
    return true
  } else if (
    endingTime > startingTime &&
    currentHour >= startingTime &&
    currentHour < endingTime
  ) {
    return true
  } else if (
    endingTime < startingTime &&
    (currentHour > startingTime || currentHour < endingTime)
  ) {
    return true
  } else {
    return false
  }
}

export const inTimeRange = (
  currentHour,
  timeStart,
  timeEnd,
  timeStartAlt,
  timeEndAlt
) =>
  checkTime(currentHour, timeStart, timeEnd) ||
  checkTime(currentHour, timeStartAlt, timeEndAlt)

export const inMonthRange = (currentMonth, months) =>
  months.includes(currentMonth)

export const critterFilter = (bugs, currentDate) => {
  const [hemisphere, setHemisphere] = useContext(HemisphereContext)
  const currentHour = currentDate.getHours()
  const currentMonth = currentDate.getMonth()

  return bugs
    .filter(
      ({
        timeStart,
        timeEnd,
        timeStartAlt,
        timeEndAlt,
        monthsNorthHemi,
        monthsSouthHemi,
      }) =>
        inTimeRange(
          currentHour,
          timeStart,
          timeEnd,
          timeStartAlt,
          timeEndAlt
        ) &&
        inMonthRange(
          currentMonth,
          JSON.parse(
            hemisphere === HEMISPHERES.SOUTH ? monthsSouthHemi : monthsNorthHemi
          )
        )
    )
    .sort((a, b) => b.price - a.price)
}
