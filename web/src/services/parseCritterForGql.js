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
