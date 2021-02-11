import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSession } from 'app/context/SessionContext'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { useForm } from 'react-hook-form'
import { deleteURL } from 'app/services/Storage'
import { setData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const MemberEdit = (props) => {
  const [hide, setHide] = useState([])
  const [loading, setLoading] = useState(false)

  const location = useLocation()
  let history = useHistory()
  const user = useSession()
  const form = useForm({ defaultValues: user })

  useEffect(() => {
    if (location.pathname.includes(user.id)) {
      setHide(['role'])
    }
  }, [])

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      // if (user.id !== md5(data.email)) {
      //   await deleteData(COLLECTIONS.USERS, user.id)
      // }
      await setData(COLLECTIONS.USERS, user.id, data)
      history.goBack()
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }
  const onCancel = async (data) => {
    const { avatarURL } = data
    try {
      const { formState } = form
      const { dirtyFields } = formState
      dirtyFields.avatarURL && (await deleteURL(avatarURL, true))
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <MemberAdvancedForm
      onSubmit={onSubmit}
      form={form}
      hide={hide}
      onCancel={onCancel}
      loading={loading}
    />
  )
}

MemberEdit.propTypes = {}

export default MemberEdit
