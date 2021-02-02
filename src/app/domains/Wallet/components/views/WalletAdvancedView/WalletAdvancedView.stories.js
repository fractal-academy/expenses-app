import WalletAdvancedView from './WalletAdvancedView.template'
import PropTypes from 'prop-types'

const metadata = {
  title: 'domains/Wallet/components/views/WalletAdvancedView',
  component: WalletAdvancedView
}
export default metadata

const Template = (args) => <WalletAdvancedView {...args} />

export const WalletAdvancedViewStory = Template.bind({})

WalletAdvancedViewStory.args = {}
