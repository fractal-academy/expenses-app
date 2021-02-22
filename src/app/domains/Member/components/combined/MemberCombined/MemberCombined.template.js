import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { Modal, FabButton } from 'app/components/Lib'
import { firebase } from 'app/services/Firebase'
import { setData, getData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext'

/**
 * @info MemberCombined (21 Jan 2020) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.1.0 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MemberCombined = () => {
  // [ADDITIONAL_HOOKS]
  const messageDispatch = useMessageDispatch()

  // [COMPONENT_STATE_HOOKS]
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm({
    defaultValues: {
      role: 'user'
    }
  })
  const user = useSession()

  // [HELPER_FUNCTIONS]
  const onSubmit = async (data) => {
    const { email, role } = data

    //check if user already exist
    try {
      const user = await getData(COLLECTIONS.USERS, md5(email))
      if (!user.isPending) {
        setLoading(false)
        setOpen(false)
        //TODO refactor: error message to const
        return messageDispatch({
          type: types.OPEN_ERROR_MESSAGE,
          payload: 'User already exist.'
        })
      }
    } catch (e) {}

    try {
      setLoading(true)
      await setData(COLLECTIONS.USERS, md5(email), {
        email,
        role,
        isPending: true
      })
      const func = firebase
        .functions()
        .httpsCallable('sendMail', { timeout: 0 })
      await func({ email })
      Logger(
        'Invite new user',
        `New user with '${email}' email was invited`,
        user
      )
      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: 'Invitation successfully sent.'
      })
    } catch (error) {
      console.log(error)

      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: 'Something went wrong.'
      })
    }
    setLoading(false)
    setOpen(false)
  }
  const submitForm = () => form.submit()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // [TEMPLATE]
  return (
    <>
      <FabButton onClick={handleClickOpen} />
      <Modal
        open={open}
        title="Add a user"
        titleTypographyProps={{ variant: 'h5' }}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          variant: 'contained',
          color: 'primary',
          onClick: submitForm,
          loading
        }}
        buttonCancelProps={{ variant: 'contained', onClick: handleClose }}>
        <MemberAdvancedForm
          form={form}
          show={['role', 'email']}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}

export default MemberCombined
