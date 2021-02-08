import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from '@qonsoll/react-design'

const CategorySimpleView = (props) => {
  const { nameCategory, variantCategory, variantNameCategory } = props
  return (
    <Container>
      <Row h="between" mb={2}>
        <Col cw="auto">
          <Typography variant={variantCategory}>Category</Typography>
        </Col>
        <Col cw="auto">
          <Typography variant={variantNameCategory}>{nameCategory}</Typography>
        </Col>
      </Row>
    </Container>
  )
}
CategorySimpleView.propTypes = {
  nameCategory: PropTypes.string.isRequired
}
CategorySimpleView.defaultProps = {
  nameCategory: 'Other',
  variantCategory: 'body1',
  variantNameCategory: 'body1'
}

export default CategorySimpleView
