import WalletSingleSelect from './WalletSingleSelect.template'

const metadata = {
  title: 'domains/Wallet/components/select/WalletSingleSelect',
  component: WalletSingleSelect
}
export default metadata

const Template = (args) => <WalletSingleSelect {...args} />

export const WalletSingleSelectStory = Template.bind({})

WalletSingleSelectStory.args = {}
