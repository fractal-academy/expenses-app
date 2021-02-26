import { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange as Range } from 'react-date-range'
import * as locales from 'react-date-range/dist/locale'
import { Row, Container, Col } from '@qonsoll/react-design'
import { useStatisticContext } from 'app/context/StatisticsContext'
import { useStyles } from 'components/Lib/DateRange/DateRange.style'
import MuiCustomTheme from 'app/config/qonsollTheme/MuiCustomTheme'

const DateRange = () => {
  const { state, setState } = useStatisticContext()
  const classes = useStyles()
  const [date, setDate] = useState({
    ...state.date,
    key: 'selection'
  })
  useEffect(() => setDate((prev) => ({ ...prev, ...state.date })), [state.date])
  return (
    <Container>
      <Row h="center" noGutters>
        <Col>
          <Range
            className={classes.dateStyles}
            locale={locales.enGB}
            editableDateInputs={true}
            onChange={(item) => {
              setDate(item.selection)
              setState({ ...state, date: item.selection })
            }}
            moveRangeOnFirstSelection={false}
            ranges={[date]}
            rangeColors={[MuiCustomTheme.palette.primary.main]}
          />
        </Col>
      </Row>
    </Container>
  )
}

DateRange.propTypes = {}
DateRange.defaultProps = {}

export default DateRange
