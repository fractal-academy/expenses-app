import PropTypes from 'prop-types'
import { Header, Navbar } from 'components'
import { Container } from '@qonsoll/react-design'
import { useStyles } from './Layout.style'

const Layout = (props) => {
  const { children, goBack } = props
  const classes = useStyles()
  return (
    <>
      <Header goBack={goBack} />
      <Container p={2} className={classes.fitContent}>
        {children}
      </Container>
      <Navbar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.elementType)
  ]),
  goBack: PropTypes.bool
}
export default Layout
