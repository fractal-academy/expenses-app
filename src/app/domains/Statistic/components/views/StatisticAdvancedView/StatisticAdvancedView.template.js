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
  }, [state, dataFromDB])

  return resArrCategory.length > 0 ? (
    <Chart options={config} series={productSum} type="donut" />
  ) : (
    <img
      src="/noData.svg"
      alt="no data"
      style={{ width: '100%', height: '175px' }}
    />
  )
}

StatisticAdvancedView.propTypes = {
  dataFromDB: PropTypes.array.isRequired
}

export default StatisticAdvancedView
