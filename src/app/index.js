import { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop, PrivateRoute } from 'components'
import { ThemeProvider } from '@qonsoll/react-design'
import { ROUTES_VALUE } from './constants'
import { START_PAGE } from './constants/role'
import moment from 'moment'
import Theme from 'app/config/theme'
import useAuthListener from './hooks/useAuthListener'
import { CircularProgress } from '@material-ui/core'
import { useSession } from 'app/context/SessionContext'
moment.locale('en')

const App = () => {
  const matches = useMediaQuery('(min-width:600px)')
  const { loading } = useAuthListener()
  const session = useSession()
  let history = useHistory()
  useEffect(() => {
    session && history.replace(START_PAGE[session.role.toUpperCase()])
  }, [session])
  if (matches) {
    return <PlugForDesktop />
  }
  if (loading) {
    return <CircularProgress />
  }

  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        {ROUTES_VALUE.map((route) => {
          if (route.protect) {
            return <PrivateRoute {...route} />
          }
          return <Route key={route.path} {...route} />
        })}
        <Redirect to="/login" />
      </Switch>
    </ThemeProvider>
  )
}

export default App
