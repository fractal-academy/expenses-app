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
  labels: [],
  dataLabels: {
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    }
  }
}
export default optionsForChart
