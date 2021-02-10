import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { MemberAdvancedView } from 'domains/Member/components/views/MemberAdvancedView'
import { WalletCombined } from 'domains/Wallet/components/combined/WalletCombined'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { Avatar } from 'app/components/Lib/Avatar'
import { useStyles } from './WalletAdvancedView.styles'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'
import { deleteData, getData } from 'app/services/Firestore'
import { useEffect, useState } from 'react'
import { COLLECTIONS } from 'app/constants'

const WalletAdvancedView = (props) => {
  const classes = useStyles()

  const {
    idWallet,
    nameWallet,
    balance,
    idMember,
    idCurrency,
    privateWallet
  } = props

  const [memberData, setMemberData] = useState()
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  const handleClose = () => {
    setOpenSnackbarSuccess(false)
    setOpenSnackbarError(false)
  }

  useEffect(
    () =>
      idMember &&
      getData(COLLECTIONS.USERS, idMember).then((item) => setMemberData(item)),
    []
  )

  const deleteWallet = async () => {
    try {
      await deleteData(COLLECTIONS.WALLETS, idWallet)
      setOpenSnackbarSuccess(true)
    } catch (error) {
      setOpenSnackbarError(true)
    }
  }
  const DropdownList = (
    <>
      <WalletCombined
        title="Edit wallet"
        typeModalEdit
        idWallet={idWallet}
        nameWallet={nameWallet}
        balance={balance}
        idMember={idMember}
        idCurrency={idCurrency}
        privateWallet={privateWallet}>
        <DropdownItem>
          <Box mr={2}>
            <Edit />
          </Box>
          Edit
        </DropdownItem>
      </WalletCombined>
      <DropdownItem danger onClick={deleteWallet}>
        <Box mr={2}>
          <Delete />
        </Box>
        Delete
      </DropdownItem>
    </>
  )
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="success">
          Wallet is deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="error">
          Error
        </Alert>
      </Snackbar>

      <Container mb={3}>
        <Row>
          <Col>
            <Paper className={classes.styledPaper}>
              <Container p={2}>
                <Row>
                  <Col>
                    <Row h="between" v="center" mb={4}>
                      {/*there are name of wallet and drop down with edit and delete functions*/}

                      <Col cw="auto">
                        <Typography variant="body1">{nameWallet}</Typography>
                      </Col>
                      <Col cw="auto">
                        <Dropdown overlay={DropdownList}>
                          <IconButton
                            size="small"
                            color="primary"
                            aria-label="upload picture"
                            component="span">
                            <MoreHorizOutlined />
                          </IconButton>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row v="center" noGutters>
                  <Col>
                    <Row>
                      {/*there is member`s info*/}

                      <Col>
                        {privateWallet ? (
                          <MemberAdvancedView
                            horizontal
                            name={memberData && memberData.firstName}
                            surname={memberData && memberData.surname}
                            avatarUrl={memberData && memberData.avatarURL}
                            role={'owner'}
                          />
                        ) : (
                          <Container>
                            <Row v="center">
                              <Col cw="auto">
                                <Avatar
                                  src="https://firebasestorage.googleapis.com/v0/b/expenses-app-development-9ba1c.appspot.com/o/logo-white(sense)-color(teq).jpg?alt=media&token=757d0b30-a6b6-4637-be0c-cc8efbc3f69f"
                                  alt="Senseteq"
                                />
                              </Col>
                              <Col cw="auto">
                                <Typography>Senseteq</Typography>
                              </Col>
                            </Row>
                          </Container>
                        )}
                      </Col>
                    </Row>
                  </Col>
                  <Col cw="auto">
                    {/*there is info about balance*/}

                    <Row>
                      <Col>
                        <Typography variant="caption">Balance</Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Box display="flex">
                          <Typography variant="body1">{balance}</Typography>
                          <CurrencySimpleView
                            variant="body1"
                            value={idCurrency}
                          />
                        </Box>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Paper>
          </Col>
        </Row>
      </Container>
    </>
  )
}

WalletAdvancedView.propTypes = {}

export default WalletAdvancedView
