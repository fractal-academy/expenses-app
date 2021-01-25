import CurrencySimpleView from './CurrencySimpleView.template'
import { currency } from 'app/constants'
const { CURRENCY_KEYS } = currency
const metadata = {
  title: 'domains/Currency/components/views/CurrencySimpleView',
  component: CurrencySimpleView,
  argTypes: {
    // creates a specific argType based on the iconMap object
    value: {
      control: {
        type: 'select',
        options: CURRENCY_KEYS
      }
    },
    textProps: {
      description: 'All Material UI Typography props.',
      control: {
        type: 'object'
      }
    }
  }
}
export default metadata

const Template = (args) => <CurrencySimpleView {...args} />

export const CurrencySimpleViewStory = Template.bind({})

CurrencySimpleViewStory.args = {
  value: CURRENCY_KEYS[0],
  textProps: {}
}
