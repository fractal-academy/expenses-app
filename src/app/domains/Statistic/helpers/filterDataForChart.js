import rangeForFilterData from './rangeForFilterData'
import uniqueItems from 'domains/Statistic/helpers/uniqueItems'
import parseDataToArray from 'app/domains/Statistic/helpers/parseDataToArray'

const filterDataForChart = (range, dataDB) => {
  const [rangeStart, rangeEnd] = rangeForFilterData(
    range.startDate,
    range.endDate
  )
  const resArrCategory = uniqueItems(dataDB, rangeStart, rangeEnd, 'category')
  const resultArrValuesForChart = parseDataToArray(
    dataDB,
    resArrCategory,
    rangeStart,
    rangeEnd
  )
  return [resArrCategory, resultArrValuesForChart]
}
export default filterDataForChart
