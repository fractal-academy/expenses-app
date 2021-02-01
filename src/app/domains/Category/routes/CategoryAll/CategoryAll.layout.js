import { CategoryList } from 'domains/Category/components/list'
import { CategoryCombined } from 'domains/Category/components/combined/CategoryCombined'

const CategoryAll = (props) => {
  return (
    <>
      <CategoryCombined title="New Category" />
      <CategoryList />
    </>
  )
}
CategoryAll.propTypes = {}
CategoryAll.defaultProps = {}

export default CategoryAll
