//parse data from DB to object
const parseDataToObject = (data, arrWitUniqueValues, rangeStart, rangeEnd) => {
  const res = {}
  arrWitUniqueValues.map((item) => {
    res[item] = {}
  })

  arrWitUniqueValues.forEach((nameMember) => {
    const wallet = {}
    let spent = 0
    data.forEach((item) => {
      if (
        rangeStart <= item.dateBuy &&
        item.dateBuy <= rangeEnd &&
        nameMember === item.assign
      ) {
        wallet[item.wallet] = wallet[item.wallet] || 0
        wallet[item.wallet] += item.price
        spent += item.price
      }
    })
    res[nameMember].wallets = wallet
    res[nameMember].spent = spent
  })
  return res
}
export default parseDataToObject
