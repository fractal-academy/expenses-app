import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'app/domains/Wallet/components/form/WalletForm'
import { setData, addData } from 'app/services/Firestore'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useSession } from 'app/context/SessionContext/hooks'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { useLogger } from 'app/hooks'
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
  const onSubmitLogger = useLogger(
    `${typeModalEdit ? 'Edit' : 'Add'}`,
    `${
      typeModalEdit
        ? 'One of wallets successfully edited'
        : 'New wallet successfully added'
    }`
  )
  // HELPER FUNCTIONS
  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = onSubmitLogger(async (data) => {
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
      idWallet
        ? await setData(COLLECTIONS.WALLETS, idWallet, {
            ...data,
            idCurrency: 'UAH'
          })
        : addData(COLLECTIONS.WALLETS, {
            ...data,
            idCurrency: 'UAH'
          }).then((doc) =>
            setData(COLLECTIONS.WALLETS, doc.id, {
              ...data,
              idCurrency: 'UAH',
              id: doc.id
            })
          )

      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: typeModalEdit
          ? 'Wallet successfully edited'
          : 'Wallet successfully added'
      })
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: error
      })
    }
    typeModalEdit ? form.reset(data) : form.reset({})
    setLoading(false)
    setOpen(false)
  })

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
