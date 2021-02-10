import { List, ListItem } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { WalletAdvancedView } from 'domains/Wallet/components/views'
import SearchIcon from '@material-ui/icons/Search'

const WALLETS = {
  hsd: {
    nameWallet: 'Olena`s wallet',
    owner: 'Olena',
    balance: '1000',
    currency: 'USD',
    avatarUrl:
      'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'
  },
  uyds: {
    nameWallet: 'Sasha`s wallet',
    owner: 'Sasha',
    balance: '800',
    currency: 'USD',
    avatarUrl:
      'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'
  }
}

function generateList(WALLETS) {
  let list = []

  for (const item in WALLETS) {
    list.push(
      <ListItem key={item}>
        <WalletAdvancedView
          idWallet={item}
          nameWallet={WALLETS[item].nameWallet}
          owner={WALLETS[item].owner}
          balance={WALLETS[item].balance}
          currency={WALLETS[item].currency}
          avatarUrl={WALLETS[item].avatarUrl}
        />
      </ListItem>
    )
  }

  return list
}

const WalletList = () => {
  return (
    <Container>
      <Row noGutters>
        <Col cw={12}>
          <List>{generateList(WALLETS)}</List>
        </Col>
      </Row>
    </Container>
  )
}
export default WalletList
