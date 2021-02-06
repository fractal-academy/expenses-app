import { Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views'

const WalletSimpleViewWithCurrency = (props) => {
  const { nameWallet, balance, currency } = props
  return (
    <Container>
      <Row h="right">
        <Col cw="auto">
          <Row>
            {/*there is name of wallet*/}

            <Col cw="auto">
              <Typography variant="body1">{nameWallet}</Typography>
            </Col>
          </Row>
          <Row h="right">
            {/*there are balance and currency*/}

            <Col cw="auto">
              <Typography variant="caption">{balance}</Typography>
              <CurrencySimpleView variant="caption" value={currency} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

WalletSimpleViewWithCurrency.propTypes = {}

export default WalletSimpleViewWithCurrency
