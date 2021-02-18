import { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { useStyles } from './StatisticSimpleFilter.style'
import { useStatisticContext } from 'app/context/StatisticsContext'
import moment from 'moment'
import 'moment/locale/uk'

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
    const ukMoment = moment().locale('uk')

    setValue(newValue)
    setState({
      ...state,
      tab: newValue,
      date: {
        startDate: new Date(ukMoment.startOf(newValue).format()),
        endDate: new Date(ukMoment.endOf(newValue).format())
      }
    })
  }
  return (
    <Paper square elevation={0}>
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

export default StatisticSimpleFilter
