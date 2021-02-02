import { MeasureSingleSelect } from 'app/domains/Measure/components/select'
import { MeasureModalWithForm } from 'domains/Measure/components/combined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import { Row, Col } from '@qonsoll/react-design'

const MeasureSingleSelectWithCreate = (props) => {
  return (
    <Row h="between" v="center" noGutters>
      <Col>
        <MeasureSingleSelect />
      </Col>
      <Col cw="auto">
        <MeasureModalWithForm title="New measure">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </MeasureModalWithForm>
      </Col>
    </Row>
  )
}

export default MeasureSingleSelectWithCreate
