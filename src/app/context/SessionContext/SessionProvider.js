import { useReducer } from 'react'
import { SessionContext, SessionDispatchContext } from './SessionContext'
import reducer from './rootReducer'

const SessionProvider = (props) => {
  const [state, dispatch] = useReducer(reducer)
  return (
    <SessionDispatchContext.Provider value={dispatch}>
      <SessionContext.Provider value={state} {...props} />
    </SessionDispatchContext.Provider>
  )
}

export default SessionProvider
