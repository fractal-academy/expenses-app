import DataGrid from './DataGrid.template'

const metadata = {
  title: 'components/Lib/Table',
  component: DataGrid
}
export default metadata

const Template = (args) => <DataGrid {...args} />

export const DataGridStory = Template.bind({})

DataGridStory.args = {}
