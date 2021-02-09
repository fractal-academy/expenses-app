import * as type from './types'

const reducer = (state, action) => {
  switch (action.type) {
    case type.LOGIN_USER: {
      console.log(action.payload)
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
