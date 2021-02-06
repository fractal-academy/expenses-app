import { CategoryCombined } from 'domains/Category/components/combined'
import { CategorySingleSelect } from 'domains/Category/components/select'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import { Row, Col, Container } from '@qonsoll/react-design'

const CategorySelectWithCreate = (props) => {
  return (
    <Container>
      <Row h="between" v="center" noGutters>
        <Col>
          <CategorySingleSelect fullWidth {...props} />
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
    </Container>
  )
}

export default CategorySelectWithCreate
