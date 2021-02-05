import { MemberAdvancedForm } from 'domains/Member/components/forms'

const MemberEdit = (props) => {
  const onSubmit = (data) => console.log(data)
  return <MemberAdvancedForm onSubmit={onSubmit} />
}

MemberEdit.propTypes = {}
MemberEdit.defaultProps = {}

export default MemberEdit
