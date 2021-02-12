import { WalletAdvancedView } from 'domains/Wallet/components/views'
import { Row, Col } from '@qonsoll/react-design'

const WalletList = (props) => {
  //INTERFACE
  const { dataForListWallets, setStatusMessage, statusMessage, ...rest } = props

  //TEMPLATE
  return dataForListWallets ? (
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
            setStatusMessage={setStatusMessage}
            statusMessage={statusMessage}
          />
        ))}
      </Col>
    </Row>
  ) : (
    <div>No data</div>
  )
}
export default WalletList
