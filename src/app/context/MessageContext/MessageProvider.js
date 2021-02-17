import { useReducer } from 'react'
import { MessageDispatchContext } from './MessageContext'
import reducer from './rootReducer'
import { Message } from 'components/Lib'
import { types } from './'

const INITIAL_STATE = { open: false, type: '', message: '' }

const MessageProvider = (props) => {
  const { children } = props

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleClose = () => dispatch({ type: types.CLOSE_MESSAGE })

  const { open, type, message } = state

  return (
    <MessageDispatchContext.Provider value={dispatch}>
      {children}
      <Message
        open={open}
        message={message}
        vertical="top"
        horizontal="center"
        autoHideDuration={1500}
        variant="filled"
        severity={type}
        onClose={handleClose}
      />
    </MessageDispatchContext.Provider>
  )
}

export default MessageProvider
