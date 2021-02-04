import RegularProductsTable from './RegularProductsTable.template'

const metadata = {
  title: 'domains/RegularProduct/components/table/RegularProductsTable',
  component: RegularProductsTable
}
export default metadata

const Template = (args) => <RegularProductsTable {...args} />

export const RegularProductsTableStory = Template.bind({})

RegularProductsTableStory.args = {
  products: [
    {
      productName: 'sugar',
      categoryName: 'kitchen',
      asignee: 'Zhenya'
    },
    {
      productName: 'sugar',
      categoryName: 'kitchen',
      asignee: 'Zhenya'
    }
  ]
}
