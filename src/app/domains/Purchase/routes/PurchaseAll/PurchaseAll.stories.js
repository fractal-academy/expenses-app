import PurchaseAll from './PurchaseAll.layout'

const metadata = {
  title: 'domains/Purchase/routes/PurchaseAll',
  component: PurchaseAll
}
export default metadata

const Template = (args) => <PurchaseAll {...args} />

export const PurchaseAllStory = Template.bind({})

PurchaseAllStory.args = {}
