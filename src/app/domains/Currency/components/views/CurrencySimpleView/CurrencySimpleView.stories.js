import CurrencySimpleView from './CurrencySimpleView.template'

const metadata = {
  title: 'domains/Currency/components/views/CurrencySimpleView',
  component: CurrencySimpleView
}
export default metadata

const Template = (args) => <CurrencySimpleView {...args} />

export const CurrencySimpleViewStory = Template.bind({})

CurrencySimpleViewStory.args = {}
