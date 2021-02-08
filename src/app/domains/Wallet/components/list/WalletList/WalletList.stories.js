import WalletList from './WalletList.template'

const metadata = {
  title: 'domains/Wallet/components/list/WalletList',
  component: WalletList
}
export default metadata

const Template = (args) => <WalletList {...args} />

export const WalletListStory = Template.bind({})

WalletListStory.args = {}
