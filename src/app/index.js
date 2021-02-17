import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider as QonsollThemeProvider } from '@qonsoll/react-design'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop, PrivateRoute } from 'components'
import moment from 'moment'
import { NotificationProvider } from 'app/context/NotificationContext'
import { useAuthListener } from 'app/hooks'
import { useSession } from 'app/context/SessionContext'
import { ROUTES_PATHS, ROUTES_VALUE } from './constants'
import { START_PAGE } from 'app/constants/role'
import QonsollTheme from 'app/config/QonsollTheme'
import { Spinner } from './components/Lib'
import MuiCustomTheme from './config/qonsollTheme/MuiCustomTheme'

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
    <QonsollThemeProvider theme={QonsollTheme}>
      <MuiThemeProvider theme={MuiCustomTheme}>
        <NotificationProvider>
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
        </NotificationProvider>
      </MuiThemeProvider>
    </QonsollThemeProvider>
  )
}

export default App
