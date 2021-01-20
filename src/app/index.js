import { Box } from '@material-ui/core'
import { Navbar } from 'components'
import { MemberShow } from 'domains/Member/routes'
import { LogAll } from 'app/domains/Log/routes'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'

const App = () => {
  return (
    <Box className={'container'}>
      <Navbar />
      <MemberShow />
      <LogAll />
    </Box>
  )
}

export default App
