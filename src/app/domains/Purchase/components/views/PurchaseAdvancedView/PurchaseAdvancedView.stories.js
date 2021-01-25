import PurchaseAdvancedView from './PurchaseAdvancedView.template'

const metadata = {
  title: 'domains/Purchase/components/views/PurchaseAdvancedView',
  component: PurchaseAdvancedView
}
export default metadata

const Template = (args) => <PurchaseAdvancedView {...args} />

export const PurchaseAdvancedViewStory = Template.bind({})

PurchaseAdvancedViewStory.args = {}
