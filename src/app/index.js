import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@qonsoll/react-design'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop, PrivateRoute } from 'components'
import moment from 'moment'
import { useAuthListener } from 'app/hooks'
import { useSession } from 'app/context/SessionContext'
import { ROUTES_PATHS, ROUTES_VALUE } from './constants'
import { START_PAGE } from 'app/constants/role'
import Theme from 'app/config/theme'
import { Spinner } from './components/Lib'

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
      <Switch>
        {ROUTES_VALUE.map((route) => {
          if (route.protect) {
            return <PrivateRoute {...route} key={route.path} />
          }
          return <Route key={route.path} {...route} />
        })}
        <Redirect
          to={START_PAGE[session?.role?.toUpperCase()] || ROUTES_PATHS.LOGIN}
        />
      </Switch>
    </ThemeProvider>
  )
}

export default App
