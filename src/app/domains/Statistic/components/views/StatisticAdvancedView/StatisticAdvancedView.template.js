import Chart from 'react-apexcharts'

const options = {
  chart: {
    id: 'basic-bar',
    animations: {
      speed: 200
    }
  },
  legend: {
    fontSize: 15,
    markers: {
      radius: 4,
      width: 22
    },
    itemMargin: {
      vertical: 4
    }
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            fontWeight: 600,
            color: '#373d3f'
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Berries', 'Grapes'],
  dataLabels: {
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    }
  }
}

const series = [500, 3000, 10000, 1733]

const StatisticAdvancedView = (props) => {
  return <Chart options={options} series={series} type="donut" />
}

StatisticAdvancedView.propTypes = {}
StatisticAdvancedView.defaultProps = {}

export default StatisticAdvancedView
