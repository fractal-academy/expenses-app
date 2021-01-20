import { Navbar } from 'components'
import { MemberShow } from 'domains/Member/routes'
import { LogAll } from 'app/domains/Log/routes'

import { firebaseConfig } from 'app/constants'

const App = () => {
  console.log(firebaseConfig)
  return (
    <div>
      <Navbar />
      <MemberShow />
      <LogAll />
    </div>
  )
}

export default App
