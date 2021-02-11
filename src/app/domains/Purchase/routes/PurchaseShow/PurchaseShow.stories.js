import PurchaseShow from './PurchaseShow.layout'

const metadata = {
  title: 'domains/Purchase/routes/PurchaseShow',
  component: PurchaseShow
}
export default metadata

const Template = (args) => <PurchaseShow {...args} />

export const PurchaseShowStory = Template.bind({})

PurchaseShowStory.args = {}
