import { WalletList } from 'app/domains/Wallet/components/list'
import { WalletCombined } from 'app/domains/Wallet/components/combined'
import { CircularProgress } from '@material-ui/core'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { Container, Row, Col } from '@qonsoll/react-design'
import { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const WalletAll = (props) => {
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  const handleClose = () => {
    setOpenSnackbarSuccess(false)
    setOpenSnackbarError(false)
  }
  const [dataForListWallets, loading] = useCollection(
    getCollectionRef(COLLECTIONS.WALLETS)
  )

  return loading ? (
    <Container height="100%" verticalAlign="middle" display="flex">
      <Row width="100%" h="center">
        <Col cw="auto" display="flex" v="center">
          <CircularProgress />
        </Col>
      </Row>
    </Container>
  ) : (
    <>
      <WalletList
        dataForListWallets={dataForListWallets}
        setOpenSnackbarSuccess={setOpenSnackbarSuccess}
        setOpenSnackbarError={setOpenSnackbarError}
      />
      <WalletCombined title={'Create new wallet'} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert variant="filled" severity="success">
          Wallet is deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarError}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert variant="filled" severity="error">
          Error
        </Alert>
      </Snackbar>
    </>
  )
}

WalletAll.propTypes = {}

export default WalletAll
