import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useStatisticContext } from 'app/context/StatisticsContext'
import moment from 'moment'
import _ from 'lodash'

const mockData = [
  {
    nameProduct: 'Day',
    category: 'Kitchen',
    dateBuy: 1612946703,
    price: 100
  },
  {
    nameProduct: 'Day',
    category: 'Kitchen',
    dateBuy: 1612946703,
    price: 100
  },
  {
    nameProduct: 'Day',
    category: 'Office',
    dateBuy: 1612946703,
    price: 100
  },
  {
    nameProduct: 'Week',
    category: 'Food',
    dateBuy: 1613119503,
    price: 200
  },

  {
    nameProduct: 'Mount',
    category: 'Office',
    dateBuy: 1614290400,
    price: 300
  },
  {
    nameProduct: 'Mount',
    category: 'Office',
    dateBuy: 1614290400,
    price: 300
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    price: 400
  },
  {
    nameProduct: 'Year',
    category: 'Kitchen',
    dateBuy: 1609452000,
    price: 400
  },
  {
    nameProduct: 'Year',
    category: 'Office',
    dateBuy: 1609452000,
    price: 400
  }
]
const filterDataForChart = (range) => {
  const rangeStart = moment(range.startDate).format('X')
  const rangeEnd = moment(range.endDate).format('X')
  const arrCategoryName = []
  const productsSum = []
  // map for create Arr with name categories
  mockData.map((item) => {
    if (rangeStart <= item.dateBuy && item.dateBuy <= rangeEnd) {
      arrCategoryName.push(item.category)
    }
  })
  // return new Arr without duplicate name categories
  const resArrCategory = _.uniqWith(arrCategoryName, _.isEqual)

  // create arr values for chart
  resArrCategory.map((nameCategory) => {
    const res = []
    mockData.map((item) => {
      if (
        item.category === nameCategory &&
        rangeStart <= item.dateBuy &&
        item.dateBuy <= rangeEnd
      ) {
        res.push(item.price) //arr values single category
      }
    })

    productsSum.push(res.reduce((a, b) => a + b, 0)) //arr for chart
  })
  return [resArrCategory, productsSum]
}
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
    enabled: true
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

const StatisticAdvancedView = (props) => {
  const { state } = useStatisticContext()

  const [resArrCategory, productSum] = filterDataForChart(state.date)
  console.log('/////////////////////////')
  const [config, setConfig] = useState(options)
  useEffect(() => {
    setConfig({ ...options, labels: resArrCategory })
  }, [state])
  return <Chart options={config} series={productSum} type="donut" />
}

StatisticAdvancedView.propTypes = {}
StatisticAdvancedView.defaultProps = {}

export default StatisticAdvancedView
