const optionsForChart = {
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
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val) {
              return val
            }
          },
          value: {
            show: true,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return val
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: '#373d3f',
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

  colors: ['#20bfa9', '#c37fbc', '#feb95a', '#ee786c', '#1065CD'],
  labels: [],
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    }
  }
}
export default optionsForChart
