import rangeForFilterData from 'domains/Statistic/helpers/rangeForFilterData'
import uniqueItems from 'app/domains/Statistic/helpers/uniqueItems'
import objectToArray from 'app/domains/Statistic/helpers/objectToArray'
import addWalletToArr from 'app/domains/Statistic/helpers/addWalletToArr'
import parseDataToObject from 'app/domains/Statistic/helpers/parseDataToObject'

const filterDataForStatisticsWallet = (range, dataDB) => {
  const [rangeStart, rangeEnd] = rangeForFilterData(
    range.startDate,
    range.endDate
  )
  const resArrMemberName = uniqueItems(dataDB, rangeStart, rangeEnd, 'assign')
  const resObj = parseDataToObject(
    dataDB,
    resArrMemberName,
    rangeStart,
    rangeEnd
  )
  const solution = objectToArray(resObj)
  const result = addWalletToArr(solution)

  return result
}
export default filterDataForStatisticsWallet
