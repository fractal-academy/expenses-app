import { ListItem, ListItemText } from '@material-ui/core'
import { Box, Col, Row } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import Typography from '@material-ui/core/Typography'
import MuiCustomTheme from '../../../../config/qonsollTheme/MuiCustomTheme'

const MemberWallets = (props) => {
  const { walletName, spentCurrentWallet, typeCurrency } = props
  return (
    <>
      <ListItem>
        <Row width="100%">
          <Col>
            <ListItemText
              secondary={
                <Typography
                  style={{
                    fontSize: 15,
                    color: MuiCustomTheme.palette.text.secondary
                  }}>
                  {walletName}
                </Typography>
              }
            />
          </Col>
          <Col cw="auto">
            <Box display="flex">
              <ListItemText
                secondary={
                  <Typography
                    style={{
                      fontSize: 15,
                      color: MuiCustomTheme.palette.text.secondary
                    }}>
                    {spentCurrentWallet.toFixed(2)}
                  </Typography>
                }
              />
              <Box ml={1}>
                <ListItemText>
                  <CurrencySimpleView
                    style={{
                      fontSize: 15,
                      color: MuiCustomTheme.palette.text.secondary
                    }}
                    value={typeCurrency ? 'UAH' : 'USD'}
                  />
                </ListItemText>
              </Box>
            </Box>
          </Col>
        </Row>
      </ListItem>
    </>
  )
}
export default MemberWallets
