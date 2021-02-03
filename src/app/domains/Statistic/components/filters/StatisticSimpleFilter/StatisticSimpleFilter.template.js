import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useStyles } from './StatisticSimpleFilter.style'

const StatisticSimpleFilter = (props) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
        <Tab label="Day" className={classes.root} />
        <Tab label="Week" className={classes.root} />
        <Tab label="Month" className={classes.root} />
        <Tab label="Year" className={classes.root} />
      </Tabs>
    </Paper>
  )
}

StatisticSimpleFilter.propTypes = {}
StatisticSimpleFilter.defaultProps = {}

export default StatisticSimpleFilter
