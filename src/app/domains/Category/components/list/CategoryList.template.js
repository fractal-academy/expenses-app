import PropTypes from 'prop-types'
import { CategoryAdvancedView } from 'domains/Category/components/views'

const dataForListCategory = [
  {
    nameCategory: 'Office',
    colorCategory: 'purple',
    currency: 'USD',
    spent: 400,
    budget: 1000,
    valueForProgressBar: '60'
  },
  {
    nameCategory: 'Kitchen',
    colorCategory: 'orange',
    currency: 'USD',
    spent: 500,
    budget: 1500,
    valueForProgressBar: '80'
  },
  {
    nameCategory: 'Office',
    colorCategory: 'red',
    currency: 'USD',
    spent: 100,
    budget: 200,
    valueForProgressBar: '50'
  },
  {
    nameCategory: 'Food',
    colorCategory: 'green',
    currency: 'USD',
    spent: 400,
    budget: 1000,
    valueForProgressBar: '30'
  },
  {
    nameCategory: 'Company',
    colorCategory: 'brown',
    currency: 'USD',
    spent: 400,
    budget: 1000,
    valueForProgressBar: '60'
  }
]
//TODO delete mock data
const CategoryList = (props) => {
  return (
    <>
      {dataForListCategory.map((item) => (
        <CategoryAdvancedView {...item} />
      ))}
    </>
  )
}
CategoryList.propTypes = {
  nameCategory: PropTypes.string.isRequired
}
CategoryList.defaultProps = {
  nameCategory: 'Other',
  variantCategory: 'body1',
  variantNameCategory: 'body1'
}

export default CategoryList
