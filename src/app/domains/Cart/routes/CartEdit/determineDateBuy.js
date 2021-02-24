import { getTimestamp } from 'app/services/Firestore'
import { types } from 'app/context/MessageContext'

const determineDateBuy = (data, messageDispatch) => {
  const dateInPicker = getTimestamp().fromDate(new Date(data.dateBuy))
  const dateNow = getTimestamp().fromDate(new Date())
  if (data.dateBuy && dateInPicker < dateNow) {
    messageDispatch({
      type: types.OPEN_SUCCESS_MESSAGE,
      payload: 'Product was edited successfully'
    })
    return dateInPicker
  } else if (data.dateBuy && dateInPicker > dateNow) {
    messageDispatch({
      type: types.OPEN_WARNING_MESSAGE,
      payload: 'Date of purchase was changed to now'
    })
    return dateNow
  } else if (!data.dateBuy) {
    messageDispatch({
      type: types.OPEN_SUCCESS_MESSAGE,
      payload: 'Product was edited successfully'
    })
    return dateNow
  }
}
export default determineDateBuy
