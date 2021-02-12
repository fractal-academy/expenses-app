//convert object to Array
const objectToArray = (data) => {
  let result = []
  for (let key in data) {
    let obj = {}
    obj.name = key.toString()
    obj = { ...obj, ...data[key] }
    result.push(obj)
  }
  return result
}
export default objectToArray
