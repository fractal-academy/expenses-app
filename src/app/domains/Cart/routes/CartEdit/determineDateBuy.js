import { getTimestamp } from 'app/services/Firestore'
import { types } from 'app/context/MessageContext'

const determineDateBuy = (data, messageDispatch) => {
  let dateBuy = 0
  const dateInPicker = getTimestamp().fromDate(new Date(data.dateBuy))
  const dateNow = getTimestamp().fromDate(new Date())
  if (data.dateBuy && dateInPicker < dateNow) {
    messageDispatch({
      type: types.OPEN_SUCCESS_MESSAGE,
      payload: 'Product was edited successfully'
    })
    dateBuy = dateInPicker
    return dateBuy
  } else if (data.dateBuy && dateInPicker > dateNow) {
    messageDispatch({
      type: types.OPEN_WARNING_MESSAGE,
      payload: 'Date of purchase was changed to now'
    })
    dateBuy = dateNow
    return dateBuy
  } else if (!data.dateBuy) {
    messageDispatch({
      type: types.OPEN_SUCCESS_MESSAGE,
      payload: 'Product was edited successfully'
    })
    dateBuy = dateNow
    return dateBuy
  }
}
export default determineDateBuy
