import WalletCombinedWithSelect from './WalletCombinedWithSelect.template'

const metadata = {
  title: 'domains/Wallet/components/combined/WalletCombinedWithSelect',
  component: WalletCombinedWithSelect
}
export default metadata

const Template = (args) => <WalletCombinedWithSelect {...args} />

export const WalletCombinedWithSelectStory = Template.bind({})

WalletCombinedWithSelectStory.args = {
  title: 'Name wallet'
}
