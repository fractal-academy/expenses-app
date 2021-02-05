import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useStyles } from './StatisticSimpleFilter.style'
import { useStatisticContext } from 'app/context/StatisticsContext'
import moment from 'moment'
import 'moment/locale/uk'
moment.locale('uk')

const TABS = [
  { label: 'Day', value: 'Day' },
  { label: 'Week', value: 'Week' },
  { label: 'Month', value: 'Month' },
  { label: 'Year', value: 'Year' }
]
const StatisticSimpleFilter = (props) => {
  const classes = useStyles()
  const { state, setState } = useStatisticContext()

  const [value, setValue] = useState(state.tab)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(moment().startOf(newValue).format('MM-DD-YYYY'))
    console.log(moment().startOf(newValue).format())
    setState({
      ...state,
      tab: newValue,
      date: {
        startDate: new Date(moment().startOf(newValue).format()),
        endDate: new Date(moment().endOf(newValue).format())
      }
    })
  }
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        variant="fullWidth"
        textColor="primary"
        className={classes.root}
        onChange={handleChange}>
        {TABS.map((item) => (
          <Tab key={item.value} className={classes.root} {...item} />
        ))}
      </Tabs>
    </Paper>
  )
}

StatisticSimpleFilter.propTypes = {}
StatisticSimpleFilter.defaultProps = {}

export default StatisticSimpleFilter
