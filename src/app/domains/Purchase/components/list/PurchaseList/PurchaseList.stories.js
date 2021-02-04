import PurchaseList from './PurchaseList.template'

const metadata = {
  title: 'domains/Purchase/components/list/PurchaseList',
  component: PurchaseList
}
export default metadata

const Template = (args) => <PurchaseList {...args} />

export const PurchaseListStory = Template.bind({})

PurchaseListStory.args = {}
