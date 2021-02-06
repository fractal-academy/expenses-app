import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { Container } from '@qonsoll/react-design'
const WalletAll = (props) => {
  return (
    <Container>
      <WalletList />
      <WalletCombined />
    </Container>
  )
}

WalletAll.propTypes = {}
WalletAll.defaultProps = {}

export default WalletAll
