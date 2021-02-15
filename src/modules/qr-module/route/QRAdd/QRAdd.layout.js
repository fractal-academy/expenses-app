import { WishEdit } from 'domains/Wish/routes'

const QrAdd = () => {
  return (
    <WishEdit buttonProps={{ visibleCancel: false, submitText: 'add Wish' }} />
  )
}

QrAdd.propTypes = {}

export default QrAdd
