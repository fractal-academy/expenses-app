import { MemberList } from 'domains/Member/components/list'
import { MemberCombined } from 'domains/Member/components/combined'

const MemberAll = (props) => {
  return (
    <>
      <MemberList />
      <MemberCombined />
    </>
  )
}

MemberAll.propTypes = {}
MemberAll.defaultProps = {}

export default MemberAll
