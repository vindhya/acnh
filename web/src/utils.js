export const parseCritterForGql = (data) => {
  const parsedData = { ...data }

  parsedData.price = parseInt(parsedData.price)
  parsedData.timeStart = parseInt(parsedData.timeStart)
  parsedData.timeEnd = parseInt(parsedData.timeEnd)

  return parsedData
}
