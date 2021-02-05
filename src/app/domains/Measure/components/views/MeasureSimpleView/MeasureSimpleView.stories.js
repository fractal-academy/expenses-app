import MeasureSimpleView from './MeasureSimpleView.template'

const metadata = {
  title: 'domains/Measure/components/views/MeasureSimpleView',
  component: MeasureSimpleView,
  argTypes: {
    textProps: {
      description: 'Takes all Typography props from Material-UI'
    },
    text: {
      description: 'Text to render'
    }
  }
}
export default metadata

const Template = (args) => <MeasureSimpleView {...args} />

export const MeasureSimpleViewStory = Template.bind({})

MeasureSimpleViewStory.args = {
  text: 'bootle',
  productNumber: '5'
}
