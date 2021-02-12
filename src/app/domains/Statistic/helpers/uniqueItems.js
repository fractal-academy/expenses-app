import _ from 'lodash'

const uniqueItems = (data, rangeStart, rangeEnd, fieldName) => {
  const tmpArr = []
  data.map((item) => {
    if (rangeStart <= item.dateBuy && item.dateBuy <= rangeEnd) {
      tmpArr.push(item[fieldName])
    }
  })
  // return new Arr without duplicate
  const resArr = _.uniqWith(tmpArr, _.isEqual)
  return resArr
}
export default uniqueItems
