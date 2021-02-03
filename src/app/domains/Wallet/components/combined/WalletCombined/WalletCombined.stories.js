import WalletCombined from './WalletCombined.template'

const metadata = {
  title: 'domains/Wallet/components/combined/WalletCombined',
  component: WalletCombined
}
export default metadata

const Template = (args) => <WalletCombined {...args} />

export const WalletCombinedStory = Template.bind({})

WalletCombinedStory.args = {
  title: 'Name wallet',
  typeModalEdit: false
}
