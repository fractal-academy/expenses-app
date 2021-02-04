import PropTypes from 'prop-types'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange as Range } from 'react-date-range'
import { Row, Container, Col } from '@qonsoll/react-design'

const DateRange = (props) => {
  const { startDate, endDate } = props
  const [state, setState] = useState([
    {
      startDate: startDate ? startDate : new Date(),
      endDate: endDate ? endDate : null,
      key: 'selection'
    }
  ])
  return (
    <Container>
      <Row h="center">
        <Col cw="auto">
          <Range
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </Col>
      </Row>
    </Container>
  )
}

DateRange.propTypes = {}
DateRange.defaultProps = {}

export default DateRange
