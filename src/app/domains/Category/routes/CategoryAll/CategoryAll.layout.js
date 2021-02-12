import { CategoryList } from 'domains/Category/components/list'
import { CategoryCombined } from 'app/domains/Category/components/combined'

const CategoryAll = (props) => {
  // TEMPLATE
  return (
    <>
      <CategoryCombined title="New Category" />
      <CategoryList />
    </>
  )
}

export default CategoryAll
