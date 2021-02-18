//parse data from DB to object
const parseDataToObject = (data, arrWitUniqueValues, rangeStart, rangeEnd) => {
  const res = {}
  arrWitUniqueValues.map((item) => {
    res[item] = {}
  })

  arrWitUniqueValues.forEach((nameMember) => {
    const wallet = {}
    let spent = 0
    let avatarURL = ''
    data.forEach((item) => {
      let dateBuy = item.dateBuy.toDate().getTime()
      if (
        rangeStart <= dateBuy &&
        dateBuy <= rangeEnd &&
        nameMember === item.assign
      ) {
        wallet[item.wallet] = wallet[item.wallet] || 0
        wallet[item.wallet] += +item.price
        spent += +item.price
        avatarURL = item.avatarURL
      }
    })
    res[nameMember].wallets = wallet
    res[nameMember].spent = +spent
    res[nameMember].avatarURL = avatarURL
  })
  return res
}
export default parseDataToObject
