import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange as Range } from 'react-date-range'
import * as locales from 'react-date-range/dist/locale'

import { Row, Container, Col } from '@qonsoll/react-design'
import { useStatisticContext } from 'app/context/StatisticsContext'
import moment from 'moment'

const DateRange = (props) => {
  const { startDate, endDate } = props
  const { state, setState } = useStatisticContext()

  const [date, setDate] = useState({
    ...state.date,
    key: 'selection'
  })
  useEffect(() => setDate((prev) => ({ ...prev, ...state.date })), [state.date])
  return (
    <Container>
      <Row h="center">
        <Col>
          <Range
            locale={locales.enGB}
            editableDateInputs={true}
            onChange={(item) => {
              setDate(item.selection)
              setState({ ...state, date: item.selection })
            }}
            moveRangeOnFirstSelection={false}
            ranges={[date]}
          />
        </Col>
      </Row>
    </Container>
  )
}

DateRange.propTypes = {}
DateRange.defaultProps = {}

export default DateRange
