import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Spinner } from 'app/components/Lib'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useState } from 'react'
import { Message } from 'app/components/Lib/Message'
import { useSession } from 'app/context/SessionContext/hooks'

const WalletAll = (props) => {
  // STATE
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })
  //CUSTOMS HOOKS
  const session = useSession()
  const [publicWallets, loadingPublicWallets] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS).where('privateWallet', '==', false)
  )
  const [myWallets, loadingMyWallets] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS).where('idMember', '==', session.id)
  )

  // HELPER FUNCTIONS
  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }

  // TEMPLATE
  return loadingPublicWallets || loadingMyWallets ? (
    <Spinner />
  ) : (
    <>
      <WalletList
        dataForListWallets={{ publicWallets, myWallets }}
        setStatusMessage={setStatusMessage}
      />
      <WalletCombined title={'Create a new wallet'} />
      <Message
        open={statusMessage.open}
        message={statusMessage.message}
        vertical="top"
        horizontal="center"
        autoHideDuration={1500}
        variant="filled"
        severity={statusMessage.type}
        onClose={handleClose}
      />
    </>
  )
}

WalletAll.propTypes = {}

export default WalletAll
