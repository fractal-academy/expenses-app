import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'domains/Statistic/components/CollapseWallet'
import { StatisticProvider } from 'app/context/StatisticsContext'
import { Typography } from '@material-ui/core'
import { Row, Container, Col } from '@qonsoll/react-design'

const mockData = [
  {
    nameProduct: 'Day',
    category: 'Kitchen',
    dateBuy: 1613029535,
    assign: 'Pasha',
    wallet: 'Food',
    price: 100
  },
  {
    nameProduct: 'Day',
    category: 'Kitchen',
    dateBuy: 1613029535,
    assign: 'Dima',
    wallet: 'Food',
    price: 100
  },
  {
    nameProduct: 'Day',
    category: 'Office',
    dateBuy: 1613029535,
    assign: 'Dima',
    wallet: 'Kitchen',
    price: 300
  },
  {
    nameProduct: 'Week',
    category: 'Food',
    dateBuy: 1613119503,
    assign: 'Max',
    wallet: 'Food',
    price: 200
  },
  {
    nameProduct: 'Week',
    category: 'Food',
    dateBuy: 1613119503,
    assign: 'Max',
    wallet: 'Food',
    price: 200
  },

  {
    nameProduct: 'Mount',
    category: 'Office',
    dateBuy: 1614290400,
    assign: 'Max',
    wallet: 'Custom',
    price: 300
  },
  {
    nameProduct: 'Mount',
    category: 'Office',
    dateBuy: 1614290400,
    assign: 'Ruslana',
    wallet: 'Office',
    price: 300
  },
  {
    nameProduct: 'Year',
    category: 'Sport',
    dateBuy: 1609452000,
    assign: 'Rostik',
    wallet: 'Office',
    price: 400
  },
  {
    nameProduct: 'Year',
    category: 'Kitchen',
    dateBuy: 1609452000,
    assign: 'Rostik',
    wallet: 'Office',
    price: 400
  },
  {
    nameProduct: 'Year',
    category: 'Office',
    dateBuy: 1609452000,
    assign: 'Rostik',
    wallet: 'Office',
    price: 400
  }
]
const StatisticAll = (props) => {
  return (
    <StatisticProvider>
      <FiltersWithCollapse />
      <Container pb={4}>
        <Row v="center" h="center" noGutters>
          <Col>
            <Typography align="center" variant="h5">
              Category statistic
            </Typography>
          </Col>
        </Row>
      </Container>
      <StatisticAdvancedView dataFromDB={mockData} />
      <Container my={3}>
        <Row v="center" h="center" noGutters>
          <Col>
            <Typography align="center" variant="h5">
              Wallets statistic
            </Typography>
          </Col>
        </Row>
      </Container>
      <CollapseWallet dataFromDB={mockData} />
    </StatisticProvider>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
