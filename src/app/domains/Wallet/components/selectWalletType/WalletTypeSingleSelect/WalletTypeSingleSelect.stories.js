import WalletTypeSingleSelect from './WalletTypeSingleSelect.template'

const metadata = {
  title: 'domains/Wallet/components/selectWalletType/WalletTypeSingleSelect',
  component: WalletTypeSingleSelect
}
export default metadata

const Template = (args) => <WalletTypeSingleSelect {...args} />

export const WalletTypeSingleSelectStory = Template.bind({})

WalletTypeSingleSelectStory.args = {
  data: {
    123: {
      nameWallet: 'Olena`s wallet',
      balance: '800',
      currency: 'USD',
      type: 'private'
    },
    456: {
      nameWallet: 'wallet',
      balance: '200',
      currency: 'USD'
    },
    789: {
      nameWallet: '1wallet',
      balance: '200000',
      currency: 'USD'
    }
  },
  id: '456'
}
