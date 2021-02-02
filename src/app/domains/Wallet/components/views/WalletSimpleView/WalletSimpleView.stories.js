import WalletSimpleView from './WalletSimpleView.template'
import PropTypes from 'prop-types'

const metadata = {
  title: 'domains/Wallet/components/views/WalletSimpleView',
  component: WalletSimpleView
}
export default metadata

const Template = (args) => <WalletSimpleView {...args} />

export const WalletSimpleViewStory = Template.bind({})

WalletSimpleViewStory.args = {}
