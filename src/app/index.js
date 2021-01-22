import { Box } from '@material-ui/core'
import { Navbar } from 'components'
import { MemberShow } from 'domains/Member/routes'
import { LogAll } from 'app/domains/Log/routes'
import { MemberCombined } from 'app/domains/Member/components/combined'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'

const App = () => {
  return (
    <Box className={'container'}>
      <MemberCombined />
    </Box>
  )
}

export default App
