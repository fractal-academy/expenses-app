import WalletFormWithSelect from './WalletFormWithSelect.template'

const metadata = {
  title: 'domains/Wallet/components/form/WalletFormWithSelect',
  component: WalletFormWithSelect,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: ['wallet']
      }
    }
  }
}
export default metadata

const Template = (args) => <WalletFormWithSelect {...args} />

export const WalletFormWithSelectStory = Template.bind({})

WalletFormWithSelectStory.args = {
  formData: {
    wallet: {
      id: '123',
      data: {
        123: {
          nameWallet: 'Olena`s wallet',
          balance: '800',
          currency: 'USD'
        },
        456: { nameWallet: 'wallet', balance: '200', currency: 'USD' },
        789: { nameWallet: '1wallet', balance: '200000', currency: 'USD' }
      }
    }
  },
  show: ['wallet']
}
