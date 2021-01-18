import ColorSingleSelect from './ColorSingleSelect.template'

const metadata = {
  title: 'domains/Color/components/select/ColorSingleSelect',
  component: ColorSingleSelect
}
export default metadata

const Template = (args) => <ColorSingleSelect {...args} />

export const ColorSingleSelectStory = Template.bind({})

ColorSingleSelectStory.args = {}
