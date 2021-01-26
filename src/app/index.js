import { Box } from '@material-ui/core'
import { Navbar } from 'components'
import { MemberShow } from 'domains/Member/routes'
import { LogAll } from 'app/domains/Log/routes'
import { MemberAdvancedForm } from 'app/domains/Member/components/forms'

import { firebaseConfig } from 'app/constants'

const App = () => {
  console.log(firebaseConfig)
  return (
    <Box className={'container'}>
      <MemberAdvancedForm />
    </Box>
  )
}

export default App
