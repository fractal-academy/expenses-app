import RegularProductSingleSelect from './RegularProductSingleSelect.template'

const metadata = {
  title: 'domains/RegularProduct/components/select/RegularProductSingleSelect',
  component: RegularProductSingleSelect
}
export default metadata

const Template = (args) => <RegularProductSingleSelect {...args} />

export const RegularProductSingleSelectStory = Template.bind({})

RegularProductSingleSelectStory.args = {}
