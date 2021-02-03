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
    avatarUrl={
      'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-11-27_19-32-45.jpg?alt=media&token=75958d4d-46ab-458f-b413-e81696c8c16d'
    }
    {...args}
  />
)

export const WalletAdvancedViewStory = Template.bind({})

WalletAdvancedViewStory.args = {}
