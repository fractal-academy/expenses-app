import { WalletAdvancedView } from 'domains/Wallet/components/views'
import { Row, Col } from '@qonsoll/react-design'

const WalletList = ({
  dataForListWallets,
  setOpenSnackbarError,
  setOpenSnackbarSuccess,
  ...rest
}) => {
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
            setOpenSnackbarSuccess={setOpenSnackbarSuccess}
            setOpenSnackbarError={setOpenSnackbarError}
          />
        ))}
      </Col>
    </Row>
  ) : (
    <div>No data</div>
  )
}
export default WalletList
