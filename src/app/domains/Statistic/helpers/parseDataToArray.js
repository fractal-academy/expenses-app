//parse data from DB to Array for Chart
const parseDataToArray = (data, arrWitUniqueValues, rangeStart, rangeEnd) => {
  const productsSum = []
  arrWitUniqueValues.map((nameCategory) => {
    const res = []
    data.map((item) => {
      if (
        item.category === nameCategory &&
        rangeStart <= item.dateBuy &&
        item.dateBuy <= rangeEnd
      ) {
        res.push(item.price) //arr values single category
      }
    })

    productsSum.push(res.reduce((a, b) => a + b, 0)) //arr for chart
  })
  return productsSum
}
export default parseDataToArray
