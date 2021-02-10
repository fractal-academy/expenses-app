import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Fragment } from 'react'

const WalletAll = (props) => {
  return (
    <>
      <WalletList />
      <WalletCombined title={'Create new wallet'} />
    </>
  )
}

WalletAll.propTypes = {}

export default WalletAll
