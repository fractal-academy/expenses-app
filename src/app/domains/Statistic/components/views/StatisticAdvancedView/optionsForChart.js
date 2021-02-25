import MuiCustomTheme from 'app/config/qonsollTheme/MuiCustomTheme'
import COLOR from 'app/constants/colors'
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
      startAngle: 0,
      endAngle: 360,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10
      },
      donut: {
        size: '65%',
        borderColor: 'none',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: MuiCustomTheme.typography.fontSize['h6'],
            fontFamily: MuiCustomTheme.typography.fontFamily['h6'],
            fontWeight: MuiCustomTheme.typography.fontWeightBold,
            color: undefined,
            offsetY: -10,
            formatter: function (val) {
              return val
            }
          },
          value: {
            show: true,
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return val
            }
          },
          total: {
            show: true,
            fontWeight: MuiCustomTheme.typography.fontWeightBold,
            color: MuiCustomTheme.palette.text.primary,
            showAlways: true,
            label: 'Total',
            formatter: function (w) {
              const tmpRes = w.globals.series.reduce((a, b) => {
                return a + b
              }, 0)
              const resString = tmpRes.toFixed(2)
              const res = +resString
              return res
            }
          }
        }
      }
    }
  },
  colors: [
    COLOR.AQUAMARINE.color,
    COLOR.LAVENDER.color,
    COLOR.CORAL.color,
    COLOR.SALMON.color,
    COLOR.BLUE.color,
    COLOR.AZURE.color,
    COLOR.BLUE_VIOLET.color,
    COLOR.WINTER_SKY.color,
    COLOR.VIRIDIAN_GREEN.color,
    COLOR.BURNT_SIENNA.color
  ],
  labels: [],
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    }
  }
}
export default optionsForChart
