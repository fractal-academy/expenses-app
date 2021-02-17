import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useStatisticContext } from 'app/context/StatisticsContext'
import filterDataForChart from 'app/domains/Statistic/helpers/filterDataForChart'
import optionsForChart from 'app/domains/Statistic/components/views/StatisticAdvancedView/optionsForChart'

const StatisticAdvancedView = (props) => {
  const { dataFromDB } = props
  const { state } = useStatisticContext()
  const [resArrCategory, productSum] = filterDataForChart(
    state.date,
    dataFromDB
  )

  const [config, setConfig] = useState(optionsForChart)
  useEffect(() => {
    setConfig({ ...optionsForChart, labels: resArrCategory })
  }, [state])
  return <Chart options={config} series={productSum} type="donut" />
}

StatisticAdvancedView.propTypes = {
  dataFromDB: PropTypes.array.isRequired
}

export default StatisticAdvancedView
