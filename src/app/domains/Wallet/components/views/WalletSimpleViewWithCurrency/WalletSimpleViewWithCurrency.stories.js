import WalletSimpleViewWithCurrency from './WalletSimpleViewWithCurrency.template'
import PropTypes from 'prop-types'

const metadata = {
  title: 'domains/Wallet/components/views/WalletSimpleViewWithCurrency',
  component: WalletSimpleViewWithCurrency
}
export default metadata

const Template = (args) => <WalletSimpleViewWithCurrency {...args} />

export const WalletSimpleViewWithCurrencyStory = Template.bind({})

WalletSimpleViewWithCurrencyStory.args = {
  nameWallet: 'Wallet name',
  balance: '300',
  currency: 'USD'
}
