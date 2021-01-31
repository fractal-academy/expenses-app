import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Spent',
      type: 'pie',
      radius: ['50%', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'inner',
        formatter: '{c}',

        fontSize: '16',
        fontWeight: 'bold'
      },
      data: [
        { value: 1048, name: 'Food' },
        { value: 735, name: 'Office' },
        { value: 580, name: 'Kitchen' },
        { value: 484, name: 'Sport' },
        { value: 300, name: 'Else' }
      ]
    }
  ]
}

const StatisticAdvancedView = (props) => {
  let chartRef = useRef(null)
  useEffect(() => {
    let chart = echarts.init(chartRef.current)
    chart.setOption(option)
  }, [])
  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '70%'
      }}
    />
  )
}

StatisticAdvancedView.propTypes = {}
StatisticAdvancedView.defaultProps = {}

export default StatisticAdvancedView
