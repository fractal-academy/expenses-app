import { ListItem, ListItemText } from '@material-ui/core'
import { Box, Col, Row } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views'

const MemberWallets = (props) => {
  const { walletName, spentCurrentWallet, typeCurrency } = props
  return (
    <>
      <ListItem>
        <Row width="100%">
          <Col>
            <ListItemText primary={walletName} />
          </Col>
          <Col cw="auto">
            <Box display="flex">
              <ListItemText primary={spentCurrentWallet} />
              <ListItemText>
                <CurrencySimpleView value={typeCurrency ? 'UAH' : 'USD'} />
              </ListItemText>
            </Box>
          </Col>
        </Row>
      </ListItem>
    </>
  )
}
export default MemberWallets
