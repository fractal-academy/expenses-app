import { useContext } from 'react'
import { SessionDispatchContext } from '../SessionContext'

const useSessionDispatch = () => useContext(SessionDispatchContext)

export default useSessionDispatch
