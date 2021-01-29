import ReactDOM from 'react-dom'
import App from './app'
import 'app/config/root.scss'
import 'app/styles/index.css'
// import { CategoryAdvancedView } from 'domains/Category/components/views
import { CategoryAdvancedView } from 'domains/Category/components/views'

ReactDOM.render(<CategoryAdvancedView />, document.getElementById('root'))
