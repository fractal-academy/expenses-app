import { MeasureSingleSelect } from 'app/domains/Measure/components/select'
import { MeasureModalWithForm } from 'domains/Measure/components/combined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import IconButton from '@material-ui/core/IconButton'
import { Row, Col, Container } from '@qonsoll/react-design'

/**
 * @info MemberSingleSelect (02 Feb 2021) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MeasureSingleSelectWithCreate = (props) => (
  <Container>
    <Row h="between" v="center" noGutters>
      <Col>
        <MeasureSingleSelect fullWidth {...props} />
      </Col>
      <Col cw="auto">
        <MeasureModalWithForm title="Measure">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </MeasureModalWithForm>
      </Col>
    </Row>
  </Container>
)

export default MeasureSingleSelectWithCreate
