import Table from './Table.template'

const metadata = {
  title: 'components/Lib/Table',
  component: Table
}
export default metadata

const Template = (args) => <Table {...args} />

export const TableStory = Template.bind({})

TableStory.args = {}
