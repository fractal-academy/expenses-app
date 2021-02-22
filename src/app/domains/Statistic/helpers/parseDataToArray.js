//parse data from DB to Array for Chart
const parseDataToArray = (data, arrWitUniqueValues, rangeStart, rangeEnd) => {
  const productsSum = []
  arrWitUniqueValues.map((nameCategory) => {
    const res = []
    data.map((item) => {
      let dateBuy = item.dateBuy.toDate().getTime()
      if (
        item.category === nameCategory &&
        rangeStart <= dateBuy &&
        dateBuy <= rangeEnd
      ) {
        res.push(+item.price) //arr values single category
      }
    })
    productsSum.push(res.reduce((a, b) => a + b, 0)) //arr for chart
  })
  const resArrData = []
  productsSum.map((item) => {
    let itemString = item.toFixed(2)
    resArrData.push(+itemString)
  })
  return resArrData
}
export default parseDataToArray
