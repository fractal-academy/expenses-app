import { Navbar } from 'components'
import { MemberShow } from 'domains/Member/routes'
import { LogAll } from 'app/domains/Log/routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <MemberShow />
      <LogAll />
    </div>
  )
}

export default App
