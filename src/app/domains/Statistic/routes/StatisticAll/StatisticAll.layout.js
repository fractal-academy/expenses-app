import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'domains/Statistic/components/CollapseWallet'
import { StatisticProvider } from 'app/context/StatisticsContext'
import { Typography, Switch } from '@material-ui/core'
import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services'
import { useEffect, useState } from 'react'
import convertToDollars from 'app/domains/Statistic/helpers/convertToDolars'

const StatisticAll = (props) => {
  const [value, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.PURCHASES)
  )
  const [checked, setChecked] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    checked
      ? (() => {
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
        })()
      : setData(value)
  }, [value, checked])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {data && (
        <StatisticProvider>
          <FiltersWithCollapse />
          <Container pb={4} mx={1} mt={2}>
            <Row v="center" h="center" noGutters>
              <Col>
                <Typography align="center" variant="h5">
                  Category statistic
                </Typography>
              </Col>
            </Row>
          </Container>
          <StatisticAdvancedView dataFromDB={data} />
          <Row>
            <Col />
            <Col cw="auto">
              <Box display="flex" alignItems="baseline">
                <Typography>UAH</Typography>
                <Switch
                  checked={checked}
                  onChange={() => {
                    setTimeout(() => {
                      setChecked(!checked)
                    }, 200)
                  }}
                  name="currencySwitch"
                />
                <Typography>USD</Typography>
              </Box>
            </Col>
          </Row>
          <Container my={3}>
            <Row v="center" h="center" noGutters>
              <Col>
                <Typography align="center" variant="h5">
                  Wallets statistic
                </Typography>
              </Col>
            </Row>
          </Container>
          <CollapseWallet dataFromDB={data} typeCurrency={!checked} />
        </StatisticProvider>
      )}
    </>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
