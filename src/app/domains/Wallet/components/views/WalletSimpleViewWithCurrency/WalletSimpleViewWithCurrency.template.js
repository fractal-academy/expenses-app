import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views'

const WalletSimpleViewWithCurrency = (props) => {
  // INTERFACE
  const { nameWallet, balance, idCurrency } = props

  // TEMPLATE
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
            {/*there are balance and idCurrency*/}

            <Col cw="auto">
              <Typography variant="caption">{balance}</Typography>
              <CurrencySimpleView variant="caption" value={idCurrency} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

WalletSimpleViewWithCurrency.propTypes = {
  nameWallet: PropTypes.string,
  balance: PropTypes.number,
  idCurrency: PropTypes.string
}

export default WalletSimpleViewWithCurrency
