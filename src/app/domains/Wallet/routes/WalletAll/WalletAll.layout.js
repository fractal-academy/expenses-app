import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Spinner } from 'app/components/Lib'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useState } from 'react'
import { Message } from 'app/components/Lib/Message'

const WalletAll = (props) => {
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })

  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }
  const [dataForListWallets, loading] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS)
  )

  return loading ? (
    <Spinner />
  ) : (
    <>
      <WalletList
        dataForListWallets={dataForListWallets}
        setStatusMessage={setStatusMessage}
      />
      <WalletCombined title={'Create new wallet'} />
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
