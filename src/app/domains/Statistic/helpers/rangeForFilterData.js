import moment from 'moment'

const rangeForFilterData = (startDate, endDate) => {
  const rangeStart = moment(startDate).format('X')
  const rangeEnd = moment(endDate).format('X')
  return [rangeStart, rangeEnd]
}
export default rangeForFilterData
