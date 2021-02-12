import { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useSession } from 'app/context/SessionContext'
import { START_PAGE } from 'app/constants/role'

const PrivateRoute = (props) => {
  const { protect, ...rest } = props
  const [match, setMatch] = useState(true)
  const session = useSession()
  const history = useHistory()
  useEffect(() => session && setMatch(protect.includes(session.role)), [])
  useEffect(
    () => !match && history.replace(START_PAGE[session.role.toUpperCase()]),
    [match]
  )
  return <Route {...rest} />
}

export default PrivateRoute
