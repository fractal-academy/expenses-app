import { Fragment } from 'react'
import {
  List,
  ListItem,
  Divider,
  InputAdornment,
  TextField
} from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { WalletAdvancedView } from 'domains/Wallet/components/views'
import SearchIcon from '@material-ui/icons/Search'

const WALLETS = [
  {
    nameWallet: 'Olena`s wallet',
    owner: 'Olena',
    balance: '1000',
    currency: 'USD',
    avatarUrl:
      'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'
  },
  {
    nameWallet: 'Sasha`s wallet',
    owner: 'Sasha',
    balance: '800',
    currency: 'USD',
    avatarUrl:
      'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'
  }
]
const WalletList = () => {
  return (
    <Container>
      <Row>
        <Col cw={12}>
          <List>
            {WALLETS.map((wallet) => {
              return (
                <Fragment key={Math.random()}>
                  <ListItem>
                    <WalletAdvancedView
                      nameWallet={wallet.nameWallet}
                      owner={wallet.owner}
                      balance={wallet.balance}
                      currency={wallet.currency}
                      avatarUrl={wallet.avatarUrl}
                    />
                  </ListItem>
                </Fragment>
              )
            })}
          </List>
        </Col>
      </Row>
    </Container>
  )
}
export default WalletList
