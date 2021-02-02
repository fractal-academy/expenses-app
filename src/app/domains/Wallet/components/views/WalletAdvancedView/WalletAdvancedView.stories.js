import WalletAdvancedView from './WalletAdvancedView.template'
import PropTypes from 'prop-types'

const metadata = {
  title: 'domains/Wallet/components/views/WalletAdvancedView',
  component: WalletAdvancedView
}
export default metadata

const Template = (args) => (
  <WalletAdvancedView
    nameWallet={'Wallet name'}
    balance={3000}
    owner={'Olena'}
    currency={'USD'}
    {...args}
  />
)

export const WalletAdvancedViewStory = Template.bind({})

WalletAdvancedViewStory.args = {}
