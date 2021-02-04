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
        options: ['nameWallet', 'member', 'balance', 'currency']
      }
    }
  }
}
export default metadata

const Template = (args) => <WalletForm {...args} />

export const WalletFormStory = Template.bind({})

WalletFormStory.args = {
  formData: {
    nameWallet: 'NameWallet',
    balance: '1000',
    currency: 'USD',
    member: 'Olena'
  },
  show: ['nameWallet', 'member', 'balance', 'currency']
}
