import { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form'
import { getCollectionRef, setData } from 'app/services/Firestore'
import { deleteURL } from 'app/services/Storage'
import { useSession } from 'app/context/SessionContext'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { Logger } from 'app/utils'

/**
 * @info MemberEdit (18 Jan 2021) // CREATION DATE
 *
 * @since 12 Feb 2021 ( v.0.0.5 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const HIDE_FIELDS = ['role']

const MemberEdit = () => {
  // [ADDITIONAL_HOOKS]
  const location = useLocation()
  const { id } = useParams()
  const history = useHistory()
  const user = useSession()
  const form = useForm()
  const [userData, userLoading] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(id)
  )

  // [COMPONENT_STATE_HOOKS]
  const [hide, setHide] = useState()
  const [loading, setLoading] = useState(false)
  //needs for correct async form default value set
  const [pageLoading, setPageLoading] = useState(true)

  // [HELPER_FUNCTIONS]
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      var description = `Member '${userData?.firstName} ${
        userData?.surname
      }' data was edited.
        ${
          userData?.firstName === data.firstName
            ? ''
            : ` Name changed on '${data.firstName}'.`
        } ${
        userData?.surname === data.surname
          ? ''
          : ` Surname changed on '${data.surname}'.`
      }`
      //delete avatar field if it undefined
      if (!data.avatarURL) {
        delete data.avatarURL
      }
      await setData(COLLECTIONS.USERS, id, data)
      Logger('Edit member', description, user)
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

  // [USE_EFFECTS]
  useEffect(() => {
    if (location.pathname.includes(user.id)) {
      setHide(HIDE_FIELDS)
    }
    return () => setLoading(false)
  }, [])

  useEffect(() => {
    if (!userLoading && userData) {
      setPageLoading(true)
      form.reset(userData)
    }
    setPageLoading(userLoading)
  }, [userData])

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
