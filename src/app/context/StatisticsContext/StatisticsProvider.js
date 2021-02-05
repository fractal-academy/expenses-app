import { useState, useEffect } from 'react'
import moment from 'moment'

import StatisticContext from './StatisticsContext'

const StatisticProvider = (props) => {
  const {
    value = {
      date: {
        startDate: new Date(moment().startOf('Month').format()),
        endDate: new Date(moment().endOf('Month').format())
      },
      tab: 'Month'
    },
    ...rest
  } = props
  const initState = {
    ...value
  }
  const [state, setState] = useState(initState)
  useEffect(() => console.log('StatisticState', state), [state])
  return <StatisticContext.Provider value={{ state, setState }} {...rest} />
}

export default StatisticProvider
