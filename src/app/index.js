import moment from 'moment'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@qonsoll/react-design'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop, PrivateRoute } from 'components'
import { Spinner } from 'components/Lib'
import { NotificationProvider } from 'app/context/NotificationContext'
import { MessageProvider } from 'app/context/MessageContext'
import { useSession } from 'app/context/SessionContext'
import { useAuthListener } from 'app/hooks'
import { ROUTES_PATHS, ROUTES_VALUE } from './constants'
import { START_PAGE } from 'app/constants/role'
import Theme from 'app/config/theme'

moment.locale('en')

const App = () => {
  const matches = useMediaQuery('(min-width:600px)')
  const { loading } = useAuthListener()
  const session = useSession()
  if (matches) {
    return <PlugForDesktop />
  }
  if (loading) {
    return <Spinner />
  }
  return (
    <ThemeProvider theme={Theme}>
      <NotificationProvider>
        <MessageProvider>
          <Switch>
            {ROUTES_VALUE.map((route) => {
              if (route.protect) {
                return <PrivateRoute {...route} key={route.path} />
              }
              return <Route key={route.path} {...route} />
            })}
            <Redirect
              to={
                (session && START_PAGE[session?.role?.toUpperCase()]) ||
                ROUTES_PATHS.LOGIN
              }
            />
          </Switch>
        </MessageProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App
