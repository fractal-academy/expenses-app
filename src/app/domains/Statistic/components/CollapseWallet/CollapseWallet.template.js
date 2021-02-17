import PropTypes from 'prop-types'
import { Row, Col, Box } from '@qonsoll/react-design'
import { List, ListItemText } from '@material-ui/core'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { useStatisticContext } from 'app/context/StatisticsContext'
import { ListItemWithCollapse } from 'app/domains/Statistic/components/ListItemWithCollapse'
import filterDataForStatisticsWallet from 'app/domains/Statistic/helpers/filterDataForStatisticWallet'

const CollapseWallet = (props) => {
  const { dataFromDB } = props
  const { state } = useStatisticContext()
  const dataList = filterDataForStatisticsWallet(state.date, dataFromDB)

  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {dataList.map((item) => (
          <ListItemWithCollapse
            key={item.name.toString()}
            memberName={item.name}
            spent={item.spent}
            memberWallet={item.wallets}
          />
        ))}
      </List>
    </>
  )
}
CollapseWallet.propTypes = {
  dataFromDB: PropTypes.array.isRequired
}
export default CollapseWallet
