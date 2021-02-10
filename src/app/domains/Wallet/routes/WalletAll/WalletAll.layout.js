import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Fragment } from 'react'

const WalletAll = (props) => {
  return (
    <Fragment>
      <WalletList />
      <WalletCombined title={'Create new wallet'} />
    </Fragment>
  )
}

WalletAll.propTypes = {}

export default WalletAll
