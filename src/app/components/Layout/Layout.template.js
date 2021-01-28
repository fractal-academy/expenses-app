import PropTypes from 'prop-types'
import { Header, Navbar } from 'components'
import { Container } from '@qonsoll/react-design'

const Layout = (props) => {
  const { children, goBack } = props

  return (
    <>
      <Header goBack={goBack} />
      <Container p={2}>{children}</Container>
      <Navbar />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.elementType,
  goBack: PropTypes.bool
}
export default Layout
