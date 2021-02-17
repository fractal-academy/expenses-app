import { WalletAdvancedView } from 'domains/Wallet/components/views'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Typography } from '@material-ui/core'

const WalletList = (props) => {
  //INTERFACE
  const { dataForListWallets } = props
  const { publicWallets, myWallets } = dataForListWallets

  //TEMPLATE
  return (
    <>
      <Container>
        <Row mb={2} h="center">
          <Col cw="auto" ml={2}>
            <Typography variant="h6">Public wallets</Typography>
          </Col>
        </Row>
        {publicWallets.docs.length > 0 ? (
          <Row noGutters mb={2}>
            <Col>
              {publicWallets.docs.map((doc) => (
                <WalletAdvancedView
                  key={doc.id}
                  idWallet={doc.id}
                  privateWallet={doc.data().privateWallet}
                  nameWallet={doc.data().nameWallet}
                  balance={doc.data().balance}
                  idCurrency={doc.data().idCurrency}
                />
              ))}
            </Col>
          </Row>
        ) : (
          <Row mb={4} h="center">
            <Col cw={'auto'}>
              <Typography variant="body2" color="textSecondary">
                You can create a first one
              </Typography>
            </Col>
          </Row>
        )}
      </Container>

      <Container>
        <Row mb={2} h="center">
          <Col cw="auto" ml={2}>
            <Typography variant="h6">My wallets</Typography>
          </Col>
        </Row>
        {myWallets.docs.length > 0 ? (
          <Row noGutters mb={2}>
            <Col>
              {myWallets.docs.map((doc) => (
                <WalletAdvancedView
                  key={doc.id}
                  idWallet={doc.id}
                  privateWallet={doc.data().privateWallet}
                  nameWallet={doc.data().nameWallet}
                  idMember={doc.data().idMember}
                  balance={doc.data().balance}
                  idCurrency={doc.data().idCurrency}
                />
              ))}
            </Col>
          </Row>
        ) : (
          <Row mb={2} h="center">
            <Col cw={'auto'}>
              <Typography variant="body2" color="textSecondary">
                You can create a first one
              </Typography>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}
export default WalletList
