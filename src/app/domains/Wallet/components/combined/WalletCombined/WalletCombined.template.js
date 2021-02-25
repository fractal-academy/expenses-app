import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'app/domains/Wallet/components/form/WalletForm'
import { setData, addData, getCollectionRef } from 'app/services/Firestore'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useSession } from 'app/context/SessionContext/hooks'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { Logger } from 'app/utils'
import md5 from 'md5'

/**
 * @info WalletCombined (03 Feb 2020) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.1.0 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const WalletCombined = (props) => {
  // [INTERFACE]
  const {
    idWallet,
    nameWallet,
    balance,
    idCurrency,
    idMember,
    privateWallet,
    title,
    typeModalEdit,
    children
  } = props

  // [STATE]
  const [open, setOpen] = useState(children && !children)
  const [loading, setLoading] = useState(false)

  // [COMPUTED_PROPERTIES]
  const data = {
    idWallet,
    nameWallet,
    balance,
    idCurrency,
    privateWallet,
    idMember
  }

  // [CUSTOM_HOOKS]
  const session = useSession()
  const messageDispatch = useMessageDispatch()
  const form = useForm({
    defaultValues: (data && data) || {}
  })

  // HELPER FUNCTIONS
  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async (data) => {
    data = { ...data, idCurrency: 'UAH' }

    const action = `${typeModalEdit ? 'Edit wallet' : 'Add new wallet'}`
    const description = `${
      typeModalEdit
        ? `Wallet '${nameWallet}' was edited`
        : `New wallet '${data.nameWallet}' was added`
    }`
    //it needs refactor
    data.privateWallet
      ? (data.idMember = md5(session.email))
      : privateWallet && idMember
      ? (data.idMember = idMember)
      : privateWallet
      ? (data.idMember = md5(session.email))
      : delete data.idMember && (data.privateWallet = false)

    try {
      setLoading(true)

      if (!typeModalEdit) {
        const wallet = await getCollectionRef(COLLECTIONS.WALLETS)
          .where('nameWallet', '==', data.nameWallet)
          .get()
        if (!wallet.empty) throw new Error('Change the wallet`s name')
        const doc = await addData(COLLECTIONS.WALLETS, data)
        setData(COLLECTIONS.WALLETS, doc.id, {
          id: doc.id
        })
      } else setData(COLLECTIONS.WALLETS, idWallet, data)

      Logger(action, description, session)
      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: description
      })
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: error.message
      })
    }
    typeModalEdit ? form.reset(data) : form.reset({})
    setLoading(false)
    setOpen(false)
  }

  const formSubmit = () => form.submit()

  const handleClickOpen = () => {
    setOpen(true)
  }

  // TEMPLATE
  return (
    <>
      {(children &&
        React.cloneElement(children, { onClick: handleClickOpen })) || (
        <FabButton onClick={handleClickOpen} />
      )}

      <Modal
        open={open}
        title={title}
        titleTypographyProps={{ variant: 'h5' }}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          text: typeModalEdit ? 'Save' : 'Submit',
          variant: 'contained',
          color: 'primary',
          type: 'submit',
          onClick: formSubmit,
          loading
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <WalletForm
          fieldProps={{
            idCurrency: { value: 'UAH' }
          }}
          form={form}
          show={[
            !typeModalEdit && 'nameWallet',
            'balance',
            'idCurrency',
            !typeModalEdit && 'privateWallet'
          ]}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}
WalletCombined.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element
}
WalletCombined.defaultProps = {
  typeModalEdit: false
}
export default WalletCombined
