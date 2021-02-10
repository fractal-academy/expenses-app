import WalletForm from './WalletForm.template'

const metadata = {
  title: 'domains/Wallet/components/form/WalletForm',
  component: WalletForm,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: ['nameWallet', 'member', 'budget', 'idCurrency']
      }
    }
  }
}
export default metadata

const Template = (args) => <WalletForm {...args} />

export const WalletFormStory = Template.bind({})

WalletFormStory.args = {
  show: ['nameWallet', 'member', 'budget', 'idCurrency']
}
