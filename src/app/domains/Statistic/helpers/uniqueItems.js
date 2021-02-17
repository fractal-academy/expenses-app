import _ from 'lodash'

const uniqueItems = (data, rangeStart, rangeEnd, fieldName) => {
  const tmpArr = []
  data.map((item) => {
    let dateBuy = item.dateBuy.toDate().getTime()

    if (rangeStart <= dateBuy && dateBuy <= rangeEnd) {
      tmpArr.push(item[fieldName])
    }
  })
  // return new Arr without duplicate
  const resArr = _.uniqWith(tmpArr, _.isEqual)

  return resArr
}
export default uniqueItems
