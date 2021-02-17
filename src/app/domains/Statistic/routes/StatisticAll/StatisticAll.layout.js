import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'domains/Statistic/components/CollapseWallet'
import { StatisticProvider } from 'app/context/StatisticsContext'
import { Typography } from '@material-ui/core'
import { Row, Container, Col } from '@qonsoll/react-design'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services'
import { useEffect, useState } from 'react'
import convertToDollars from '../../helpers/convertToDolars'

const StatisticAll = (props) => {
  const [value, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.PURCHASES)
  )

  const [data, setData] = useState([])

  useEffect(() => {
    const newVal = value?.map(async (item) => {
      const res = await convertToDollars(item)
      return res
    })
    newVal &&
      Promise.allSettled(newVal)
        .then((results) => {
          return results.map((result) => result.value)
        })
        .then((res) => {
          setData(res)
        })
  }, [value])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {data && (
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
          <StatisticAdvancedView dataFromDB={data} />
          <Container my={3}>
            <Row v="center" h="center" noGutters>
              <Col>
                <Typography align="center" variant="h5">
                  Wallets statistic
                </Typography>
              </Col>
            </Row>
          </Container>
          <CollapseWallet dataFromDB={data} />
        </StatisticProvider>
      )}
    </>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
