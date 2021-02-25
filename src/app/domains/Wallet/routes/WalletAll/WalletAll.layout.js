import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Spinner } from 'app/components/Lib'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useSession } from 'app/context/SessionContext/hooks'
import { Container } from '@qonsoll/react-design'

const WalletAll = () => {
  //CUSTOMS HOOKS
  const session = useSession()
  const [publicWallets, loadingPublicWallets] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS).where('privateWallet', '==', false)
  )
  const [myWallets, loadingMyWallets] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS).where('idMember', '==', session.id)
  )

  // TEMPLATE
  if (loadingPublicWallets || loadingMyWallets) {
    return <Spinner />
  }
  return (
    <Container py={2}>
      <WalletList dataForListWallets={{ publicWallets, myWallets }} />
      <WalletCombined title={'Create a new wallet'} />
    </Container>
  )
}

WalletAll.propTypes = {}

export default WalletAll
