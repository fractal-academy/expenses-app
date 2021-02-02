import CurrencySingleSelect from './CurrencySingleSelect.template'

const metadata = {
  title: 'domains/Currency/components/select/CurrencySingleSelect',
  component: CurrencySingleSelect,
  argTypes: {
    onChange: {
      action: 'changedCurrency',
      description: 'You can get currency object what you selected.'
    }
  }
}
export default metadata

const Template = (args) => <CurrencySingleSelect {...args} />

export const CurrencySingleSelectStory = Template.bind({})

CurrencySingleSelectStory.args = {}
