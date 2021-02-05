import { useState } from 'react'
import moment from 'moment'
import 'moment/locale/uk'
import StatisticContext from './StatisticsContext'

const ukMoment = moment().locale('uk')

const StatisticProvider = (props) => {
  const {
    value = {
      date: {
        startDate: new Date(ukMoment.startOf('Month').format()),
        endDate: new Date(ukMoment.endOf('Month').format())
      },
      tab: 'Month'
    },
    ...rest
  } = props
  const initState = {
    ...value
  }
  const [state, setState] = useState(initState)
  return <StatisticContext.Provider value={{ state, setState }} {...rest} />
}

export default StatisticProvider
