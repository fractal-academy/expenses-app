import RegularProductEdit from './RegularProductEdit.layout'

const metadata = {
  title: 'domains/RegularProduct/routes/RegularProductEdit',
  component: RegularProductEdit
}
export default metadata

const Template = (args) => <RegularProductEdit {...args} />

export const RegularProductEditStory = Template.bind({})

RegularProductEditStory.args = {}
