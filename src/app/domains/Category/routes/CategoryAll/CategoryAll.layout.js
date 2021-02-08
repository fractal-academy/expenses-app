import { CategoryList } from 'domains/Category/components/list'
import { CategoryCombined } from 'app/domains/Category/components/combined'

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
