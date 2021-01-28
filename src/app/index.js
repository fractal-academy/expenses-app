import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ROUTES_VALUE } from './constants'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'

const App = () => {
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
