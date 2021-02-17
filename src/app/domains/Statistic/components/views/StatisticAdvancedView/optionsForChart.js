import MuiCustomTheme from '../../../../../config/qonsollTheme/MuiCustomTheme'

const optionsForChart = {
  chart: {
    id: 'basic-bar',
    animations: {
      speed: 200
    },
    foreColor: MuiCustomTheme.palette.text.primary
  },
  legend: {
    fontSize: 16,
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
            color: MuiCustomTheme.palette.text.primary
          }
        }
      }
    }
  },
  labels: [],
  dataLabels: {
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    },
    style: {
      fontSize: '14px',
      color: 'red'
    }
  }
}
export default optionsForChart
