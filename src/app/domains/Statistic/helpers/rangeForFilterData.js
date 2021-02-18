const rangeForFilterData = (startDate, endDate) => {
  const rangeStart = startDate.getTime()
  const rangeEnd = endDate.getTime()

  return [rangeStart, rangeEnd]
}
export default rangeForFilterData
