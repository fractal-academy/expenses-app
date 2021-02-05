import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PlugForDesktop } from 'components'
import { ThemeProvider } from '@qonsoll/react-design'
import { ROUTES_VALUE } from './constants'
import moment from 'moment'
import Theme from 'app/config/theme'
moment.locale('en')

const App = () => {
  const matches = useMediaQuery('(min-width:600px)')
  if (matches) {
    return <PlugForDesktop />
  }
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          {ROUTES_VALUE.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to="/login" />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
