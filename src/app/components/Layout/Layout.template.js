import PropTypes from 'prop-types'
import { Header, Navbar } from 'components'

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
Layout.propTypes = {
  children: PropTypes.elementType
}
export default Layout
