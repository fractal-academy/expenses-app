import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Row } from '@qonsoll/react-design'

const CategorySimpleView = (props) => {
  const { nameCategory, variantCategory, variantNameCategory } = props
  return (
    <Row h="between">
      <Typography variant={variantCategory} paragraph>
        Category
      </Typography>
      <Typography variant={variantNameCategory}>{nameCategory}</Typography>
    </Row>
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
