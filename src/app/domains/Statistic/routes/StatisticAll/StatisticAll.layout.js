import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'domains/Statistic/components/CollapseWallet'
import { StatisticProvider } from 'app/context/StatisticsContext'
import { Typography } from '@material-ui/core'
import { Row, Container, Col } from '@qonsoll/react-design'

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
      <StatisticAdvancedView />
      <Container my={3}>
        <Row v="center" h="center" noGutters>
          <Col>
            <Typography align="center" variant="h5">
              Wallets statistic
            </Typography>
          </Col>
        </Row>
      </Container>
      <CollapseWallet />
    </StatisticProvider>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
