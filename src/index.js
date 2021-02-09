import ReactDOM from 'react-dom'
import App from './app'
import 'app/config/root.scss'
import 'app/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
