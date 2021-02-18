import PropTypes from 'prop-types'
import { Row, Col, Box } from '@qonsoll/react-design'
import { List, ListItemText } from '@material-ui/core'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { useStatisticContext } from 'app/context/StatisticsContext'
import { ListItemWithCollapse } from 'app/domains/Statistic/components/ListItemWithCollapse'
import filterDataForStatisticsWallet from 'app/domains/Statistic/helpers/filterDataForStatisticWallet'
import totalSpentPublicWallet from 'domains/Statistic/helpers/totalSpentPublicWallet'

const CollapseWallet = (props) => {
  const { dataFromDB, typeCurrency } = props
  const { state } = useStatisticContext()
  const dataList = filterDataForStatisticsWallet(state.date, dataFromDB)
  const totalPublicWallet = totalSpentPublicWallet(dataFromDB)
  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {dataList.map((item) => (
          <ListItemWithCollapse
            key={item.name.toString()}
            memberName={item.name}
            spent={item.spent}
            memberWallet={item.wallets}
            avatarURL={item.avatarURL}
            typeCurrency={typeCurrency}
          />
        ))}
        {!!dataList.length > 0 && (
          <Row>
            <Col />
            <Col cw="auto">
              <Box display="flex">
                <ListItemText primary="Public wallets: &nbsp;" />
                <ListItemText primary={totalPublicWallet} />
                <ListItemText>
                  <CurrencySimpleView value={typeCurrency ? 'UAH' : 'USD'} />
                </ListItemText>
              </Box>
            </Col>
          </Row>
        )}
      </List>
    </>
  )
}
CollapseWallet.propTypes = {
  dataFromDB: PropTypes.array.isRequired
}
export default CollapseWallet
