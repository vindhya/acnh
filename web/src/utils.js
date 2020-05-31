export const parseCritterForGql = (data) => {
  const parsedData = { ...data }

  parsedData.price = parseInt(parsedData.price)
  parsedData.timeStart = parseInt(parsedData.timeStart)
  parsedData.timeEnd = parseInt(parsedData.timeEnd)

  if (parsedData.shadowSize) {
    parsedData.shadowSize = parseInt(parsedData.shadowSize)
  }

  if (parsedData.timeStartAlt && parsedData.timeEndAlt) {
    parsedData.timeStartAlt = parseInt(parsedData.timeStartAlt)
    parsedData.timeEndAlt = parseInt(parsedData.timeEndAlt)
  } else {
    parsedData.timeStartAlt = null
    parsedData.timeEndAlt = null
  }

  return parsedData
}

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
