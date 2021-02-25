import * as type from './types'

const reducer = (state, action) => {
  switch (action.type) {
    case type.OPEN_ERROR_MESSAGE: {
      return { ...state, open: true, type: 'error', message: action.payload }
    }
    case type.OPEN_WARNING_MESSAGE: {
      return { ...state, open: true, type: 'warning', message: action.payload }
    }
    case type.OPEN_SUCCESS_MESSAGE: {
      return { ...state, open: true, type: 'success', message: action.payload }
    }
    case type.CLOSE_MESSAGE: {
      return { ...state, open: false, type: '', message: '' }
    }
    default:
      return state
  }
}

export default reducer
