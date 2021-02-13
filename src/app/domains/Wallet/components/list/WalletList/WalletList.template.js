import { WalletAdvancedView } from 'domains/Wallet/components/views'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Typography } from '@material-ui/core'

const WalletList = (props) => {
  //INTERFACE
  const { dataForListWallets, setStatusMessage, statusMessage, ...rest } = props
  const { publicWallets, myWallets } = dataForListWallets

  //TEMPLATE
  return (
    <>
      {publicWallets && (
        <Container>
          <Row mb={2} h="center">
            <Col cw="auto" ml={2}>
              <Typography variant="body1">Public wallets</Typography>
            </Col>
          </Row>
          <Row noGutters mb={2}>
            <Col>
              {publicWallets.docs.map((doc) => (
                <WalletAdvancedView
                  key={doc.id}
                  idWallet={doc.id}
                  nameWallet={doc.data().nameWallet}
                  balance={doc.data().balance}
                  idCurrency={doc.data().idCurrency}
                  setStatusMessage={setStatusMessage}
                />
              ))}
            </Col>
          </Row>
        </Container>
      )}

      {myWallets && (
        <Container>
          <Row mb={2} h="center">
            <Col cw="auto" ml={2}>
              <Typography variant="body1">My wallets</Typography>
            </Col>
          </Row>
          <Row noGutters mb={2}>
            <Col>
              {myWallets.docs.map((doc) => (
                <WalletAdvancedView
                  key={doc.id}
                  idWallet={doc.id}
                  nameWallet={doc.data().nameWallet}
                  balance={doc.data().balance}
                  idCurrency={doc.data().idCurrency}
                  setStatusMessage={setStatusMessage}
                />
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}
export default WalletList
