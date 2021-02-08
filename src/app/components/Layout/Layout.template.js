import PropTypes from 'prop-types'
import { Header, Navbar } from 'components'
import { Container } from '@qonsoll/react-design'
import { useStyles } from './Layout.style'

const Layout = (props) => {
  const { children, goBack, title } = props
  const classes = useStyles()
  return (
    <>
      <Header goBack={goBack} title={title} />
      <Container className={classes.fitContent}>{children}</Container>
      <Navbar />
    </>
  )
}

Layout.propTypes = {
  goBack: PropTypes.bool
}
export default Layout
