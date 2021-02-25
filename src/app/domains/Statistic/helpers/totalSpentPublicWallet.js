import rangeForFilterData from 'domains/Statistic/helpers/rangeForFilterData'

const totalSpentPublicWallet = (range, data) => {
  const totalSpentPublicArr = []
  const totalSpentPrivateArr = []
  const [rangeStart, rangeEnd] = rangeForFilterData(
    range.startDate,
    range.endDate
  )
  data?.map((item) => {
    let dateBuy = item.dateBuy.toDate().getTime()
    if (rangeStart <= dateBuy && dateBuy <= rangeEnd && !item.privateWallet)
      totalSpentPublicArr.push(+item.price)
    if (rangeStart <= dateBuy && dateBuy <= rangeEnd && item.privateWallet)
      totalSpentPrivateArr.push(+item.price)
  })
  const totalSpentPublicWallet = totalSpentPublicArr.reduce((a, b) => a + b, 0)
  const totalSpentPrivateWallet = totalSpentPrivateArr.reduce(
    (a, b) => a + b,
    0
  )
  return [totalSpentPublicWallet, totalSpentPrivateWallet]
}
export default totalSpentPublicWallet
