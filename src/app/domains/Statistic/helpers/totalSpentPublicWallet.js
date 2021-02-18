import rangeForFilterData from 'domains/Statistic/helpers/rangeForFilterData'

const totalSpentPublicWallet = (range, data) => {
  const totalSpentArr = []
  const [rangeStart, rangeEnd] = rangeForFilterData(
    range.startDate,
    range.endDate
  )
  data?.map((item) => {
    let dateBuy = item.dateBuy.toDate().getTime()
    if (rangeStart <= dateBuy && dateBuy <= rangeEnd && !item.privateWallet)
      totalSpentArr.push(+item.price)
  })
  const totalSpentPublicWallet = totalSpentArr.reduce((a, b) => a + b, 0)
  return totalSpentPublicWallet
}
export default totalSpentPublicWallet
