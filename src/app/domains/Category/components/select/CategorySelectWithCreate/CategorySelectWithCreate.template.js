import PropTypes from 'prop-types'
import { CategorySingleSelect } from 'domains/Category/components/select'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'

import { Row } from '@qonsoll/react-design'

const CategorySelectWithCreate = (props) => {
  return (
    <Row h="between" v="center">
      <CategorySingleSelect />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Row>
  )
}

CategorySelectWithCreate.propTypes = {}
CategorySelectWithCreate.defaultProps = {}

export default CategorySelectWithCreate
