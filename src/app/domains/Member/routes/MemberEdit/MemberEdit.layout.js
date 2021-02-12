import { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useSession } from 'app/context/SessionContext'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { useForm } from 'react-hook-form'
import { deleteURL } from 'app/services/Storage'
import { getData, setData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'

const MemberEdit = (props) => {
  const [hide, setHide] = useState()
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [userData, setUserData] = useState({})

  const location = useLocation()
  const { id } = useParams()
  let history = useHistory()
  const user = useSession()
  const form = useForm()

  useEffect(() => {
    if (location.pathname.includes(user.id)) {
      setHide(['role'])
    }
    return () => setLoading(false)
  }, [])

  useEffect(() => {
    setPageLoading(true)

    if (id === user.id) {
      setUserData(user)
    } else {
      const fetchUser = async () => {
        const res = await getData(COLLECTIONS.USERS, id)
        setUserData({ ...res, id })
      }
      fetchUser()
    }
  }, [id])

  useEffect(() => {
    if (pageLoading && Object.keys(userData).length) {
      form.reset(userData)
      setPageLoading(false)
    }
  }, [userData])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await setData(COLLECTIONS.USERS, userData.id, data)

      history.goBack()
    } catch (e) {
      console.log(e)
    }
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

  if (pageLoading) {
    return <Spinner />
  }

  return (
    <MemberAdvancedForm
      onSubmit={onSubmit}
      form={form}
      hide={hide}
      onCancel={onCancel}
      loading={loading}
      profile
    />
  )
}

MemberEdit.propTypes = {}

export default MemberEdit
