import Chart from 'react-apexcharts'
import { useStatisticContext } from 'app/context/StatisticsContext'
import 'moment/locale/uk'
import moment from 'moment'
import 'moment/locale/uk'
import _ from 'lodash'
const ukMoment = moment().locale('uk')

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

  dataLabels: {
    formatter: function (val, opts) {
      return opts.w.globals.series[opts.seriesIndex]
    }
  }
}

const series = [5030, 3000, 1000, 1400]

const mockData = [
  {
    nameProduct: 'Day',
    category: 'Kitchen',
    dateBuy: 1612648800,
    price: 10
  },
  {
    nameProduct: 'Day',
    category: 'Office',
    dateBuy: 1612648800,
    price: 10
  },
  {
    nameProduct: 'Day',
    category: 'Office',
    dateBuy: 1612648800,
    price: 10
  },
  {
    nameProduct: 'Week',
    category: 'Food',
    dateBuy: 1612130400,
    price: 100
  },

  {
    nameProduct: 'Mount',
    category: 'Office',
    dateBuy: 1614290400,
    price: 1000
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    price: 10000
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    price: 10000
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    price: 10000
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    price: 10000
  }
]
const func = (range) => {
  const rangeStart = parseInt(moment(range.startDate).format('X'))
  const rangeEnd = parseInt(moment(range.endDate).format('X'))
  const arrCategoryName = []
  const productsSum = []
  // map for create Arr with name categories
  mockData.forEach((item) => {
    if (rangeStart <= item.dateBuy && item.dateBuy <= rangeEnd) {
      arrCategoryName.push(item.category)
    }
  })
  // return new Arr without duplicate name categories
  const resArrCategory = _.uniqWith(arrCategoryName, _.isEqual)

  resArrCategory.forEach((nameCategory) => {
    const res = []
    mockData.forEach((item) => {
      if (
        item.category === nameCategory &&
        rangeStart <= item.dateBuy &&
        item.dateBuy <= rangeEnd
      ) {
        res.push(item.price)
      }
    })

    productsSum.push(res.reduce((a, b) => a + b, 0))
  })

  return [resArrCategory, productsSum]
}

const StatisticAdvancedView = (props) => {
  const { state, setState } = useStatisticContext()

  const [arrCategoryName, productSum] = func(state.date)
  options.labels = arrCategoryName
  console.log(arrCategoryName, productSum)
  return <Chart options={options} series={productSum} type="donut" />
}

StatisticAdvancedView.propTypes = {}
StatisticAdvancedView.defaultProps = {}

export default StatisticAdvancedView
