import TableHead from './TableHead.template'

const metadata = {
  title: 'components/Lib/TableHead',
  component: TableHead
}
export default metadata

const Template = (args) => <TableHead {...args} />

export const TableHeadStory = Template.bind({})

TableHeadStory.args = {
  page: 'CART'
}
