import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from '@qonsoll/react-design'

const CategoryList = (props) => {
  const { nameCategory, variantCategory, variantNameCategory } = props
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}
CategoryList.propTypes = {
  nameCategory: PropTypes.string.isRequired
}
CategoryList.defaultProps = {
  nameCategory: 'Other',
  variantCategory: 'body1',
  variantNameCategory: 'body1'
}

export default CategoryList
