import { Switch, Route, Redirect } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop } from 'components'
import { ThemeProvider } from '@qonsoll/react-design'
import { ROUTES_VALUE } from './constants'
import moment from 'moment'
import Theme from 'app/config/theme'
import useAuthListener from './hooks/useAuthListener'
import { CircularProgress } from '@material-ui/core'
moment.locale('en')

const App = () => {
  const matches = useMediaQuery('(min-width:600px)')
  const { loading } = useAuthListener()
  if (matches) {
    return <PlugForDesktop />
  }
  if (loading) {
    return <CircularProgress />
  }
  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        {ROUTES_VALUE.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect to="/login" />
      </Switch>
    </ThemeProvider>
  )
}

export default App
