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
    fontSize: MuiCustomTheme.typography.body2,
    fontWeight: MuiCustomTheme.typography.fontWeightLight,
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
            fontWeight: MuiCustomTheme.typography.fontWeightBold,
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
    }
  }
}
export default optionsForChart
