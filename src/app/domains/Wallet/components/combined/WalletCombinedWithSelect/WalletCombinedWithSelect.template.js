import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'domains/Wallet/components/form/WalletForm'
import { useForm } from 'react-hook-form'
import { getCollectionRef } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext/hooks'
import { COLLECTIONS } from 'app/constants'

const WalletCombinedWithSelect = (props) => {
  // INTERFACE
  const {
    title,
    typeModalEdit,
    children,
    onSubmitFunction,
    onClick,
    setStatusMessage
  } = props

  // STATE
  const [selectData, setSelectData] = useState({})
  const [open, setOpen] = useState(children && !children)
  const [loading, setLoading] = useState(false)

  // CUSTOM HOOKS
  const session = useSession()
  const form = useForm({})
  const formSubmit = () => form.submit()

  // HELPER FUNCTIONS
  const onSubmit = async (data) => {
    setLoading(true)
    await onSubmitFunction(data.select)
    setLoading(false)
    setOpen(false)
  }
  let data = {}

  useEffect(() => {
    const fetchData = async () => {
      /*
      get wallets where you are owner, or Senseteq is owner*/
      let result = await getCollectionRef(COLLECTIONS.WALLETS)
        .where('idMember', '==', session.id)
        .get()
      await result.forEach((doc) => (data = { ...data, [doc.id]: doc.data() }))
      result = await getCollectionRef(COLLECTIONS.WALLETS)
        .where('privateWallet', '==', false)
        .get()
      await result.forEach((doc) => (data = { ...data, [doc.id]: doc.data() }))
      setSelectData(data)
    }
    fetchData()
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
    setOpen(false)
  }
  const onClickPrev = async () => {
    const result = await onClick()
    //if result === 1, you have 1 or more empty product`s field
    //if result === 0, modal window will be opened

    if (result) {
      setStatusMessage({
        open: true,
        message: 'Fill all fields',
        type: 'error'
      })
    } else {
      setOpen(true)
    }
  }

  // TEMPLATE
  return (
    <>
      {(children &&
        React.cloneElement(children, {
          onClick: (onClick && onClickPrev) || handleClickOpen
        })) || <FabButton onClick={handleClickOpen} />}

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
          onClick: formSubmit,
          loading
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <WalletForm
          fieldProps={{ select: { data: selectData } }}
          form={form}
          show={['select']}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}
WalletCombinedWithSelect.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element,
  onSubmitFunction: PropTypes.func,
  onClick: PropTypes.func
}
export default WalletCombinedWithSelect
