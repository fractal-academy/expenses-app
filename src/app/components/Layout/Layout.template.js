import { Header } from 'components'
import { Navbar } from 'components'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  )
}
Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout
