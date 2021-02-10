import { WalletAdvancedView } from 'domains/Wallet/components/views'
import { useCollection } from 'react-firebase-hooks/firestore'
import { CircularProgress } from '@material-ui/core'
import { getCollectionRef } from 'app/services'
import { Container, Row, Col } from '@qonsoll/react-design'
import { COLLECTIONS } from 'app/constants'

const WalletList = () => {
  const [dataForListWallets, loading] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS)
  )
  return loading ? (
    <Container height="100%" verticalAlign="middle" display="flex">
      <Row width="100%" h="center">
        <Col cw="auto" display="flex" v="center">
          <CircularProgress />
        </Col>
      </Row>
    </Container>
  ) : dataForListWallets ? (
    <Row noGutters>
      <Col>
        {dataForListWallets.docs.map((doc) => (
          <WalletAdvancedView
            key={doc.id}
            idWallet={doc.id}
            nameWallet={doc.data().nameWallet}
            idMember={doc.data().idMember}
            balance={doc.data().balance}
            privateWallet={doc.data().privateWallet}
            idCurrency={doc.data().idCurrency}
          />
        ))}
      </Col>
    </Row>
  ) : (
    <div>No data</div>
  )
}
export default WalletList
