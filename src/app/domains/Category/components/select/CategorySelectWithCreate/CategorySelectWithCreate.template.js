import PropTypes from 'prop-types'
import { CategorySingleSelect } from 'domains/Category/components/select'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'

import { Row, Col } from '@qonsoll/react-design'
import { CategoryCombined } from 'domains/Category/components/combined/CategoryCombined'

const CategorySelectWithCreate = (props) => {
  return (
    <Row h="between" v="center" noGutters>
      <Col>
        <CategorySingleSelect fullWidth />
      </Col>
      <Col cw="auto">
        <CategoryCombined title="New Category">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </CategoryCombined>
      </Col>
    </Row>
  )
}

CategorySelectWithCreate.propTypes = {}
CategorySelectWithCreate.defaultProps = {}

export default CategorySelectWithCreate
