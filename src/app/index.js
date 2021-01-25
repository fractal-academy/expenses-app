import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { route } from './constants'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'

const { ROUTES_VALUE } = route

const App = () => {
  return (
    <Router>
      <Switch>
        {ROUTES_VALUE.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}

export default App
