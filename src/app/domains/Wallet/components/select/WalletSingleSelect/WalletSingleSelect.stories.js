import WalletSingleSelect from './WalletSingleSelect.template'

const metadata = {
  title: 'domains/Wallet/components/select/WalletSingleSelect',
  component: WalletSingleSelect
}
export default metadata

const Template = (args) => <WalletSingleSelect {...args} />

export const WalletSingleSelectStory = Template.bind({})

WalletSingleSelectStory.args = {
  data: {
    123: {
      nameWallet: 'Olena`s wallet',
      balance: '800',
      currency: 'USD'
    },
    456: { nameWallet: 'wallet', balance: '200', currency: 'USD' },
    789: { nameWallet: '1wallet', balance: '200000', currency: 'USD' }
  },
  id: '456'
}
