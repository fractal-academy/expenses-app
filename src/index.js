import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import { SessionProvider } from 'app/context/SessionContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import 'app/config/root.scss'
import 'app/styles/index.css'

ReactDOM.render(
  <Router>
    <SessionProvider>
      <App />
    </SessionProvider>
  </Router>,
  document.getElementById('root')
)
serviceWorkerRegistration.register()
