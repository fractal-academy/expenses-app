import { List, ListItem } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { WalletAdvancedView } from 'domains/Wallet/components/views'

const dataForListWallets = {
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

function generateList(dataForListWallets) {
  let list = []

  for (const item in dataForListWallets) {
    list.push(
      <WalletAdvancedView
        key={item}
        idWallet={item}
        nameWallet={dataForListWallets[item].nameWallet}
        owner={dataForListWallets[item].owner}
        balance={dataForListWallets[item].balance}
        currency={dataForListWallets[item].currency}
        avatarUrl={dataForListWallets[item].avatarUrl}
      />
    )
  }

  return list
}

const WalletList = () => {
  return generateList(dataForListWallets) || <div>No data</div>
}
export default WalletList
