import * as type from './types'

const reducer = (state, action) => {
  switch (action.type) {
    case type.LOGIN_USER: {
      return {
        ...state,
        ...action.payload
      }
    }
    case type.LOGOUT_USER: {
      return null
    }
    default:
      return state
  }
}

export default reducer
