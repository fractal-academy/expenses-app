import { Container } from '@qonsoll/react-design'
import { WishTable } from 'app/domains/Wish/components/table/'
import { WishCombined } from 'domains/Wish/components/combined'

const WishAll = (props) => {
  return (
    <Container>
      <WishTable />
      <WishCombined title="Create wish" />
    </Container>
  )
}

WishAll.propTypes = {}
WishAll.defaultProps = {}

export default WishAll
