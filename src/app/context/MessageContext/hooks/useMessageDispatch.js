import { useContext } from 'react'
import { MessageDispatchContext } from '../MessageContext'

const useMessageDispatch = () => useContext(MessageDispatchContext)

export default useMessageDispatch
