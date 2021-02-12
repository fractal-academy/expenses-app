import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper } from '@material-ui/core'
import { MemberAdvancedView } from 'domains/Member/components/views/MemberAdvancedView'
import { WalletCombined } from 'domains/Wallet/components/combined/WalletCombined'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { Avatar } from 'app/components/Lib/Avatar'
import { Confirmation } from 'app/components/Lib/Confirmation'
import { useStyles } from './WalletAdvancedView.styles'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'
import { getData } from 'app/services/Firestore'
import { useEffect, useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { deleteData } from 'app/services/Firestore'
import PropTypes from 'prop-types'
import formatCurrency from 'format-currency'

const WalletAdvancedView = (props) => {
  // INTERFACE
  const {
    idWallet,
    nameWallet,
    balance,
    idMember,
    idCurrency,
    privateWallet,
    setStatusMessage
  } = props

  // STATE
  const [memberData, setMemberData] = useState()
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  console.log(idWallet)
  // CUSTOM HOOKS
  const classes = useStyles()
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(COLLECTIONS.USERS, idMember)
      setMemberData(result)
    }
    idMember && fetchData()
  }, [idMember])

  // HELPER FUNCTIONS
  const formattedAvailableBalance = formatCurrency(balance)
  const deleteWallet = async () => {
    try {
      await deleteData(COLLECTIONS.WALLETS, idWallet)
      setStatusMessage({
        open: true,
        message: 'Wallet successfully deleted',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
  }

  //TEMPLATE
  const DropdownList = (
    <Box>
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
      <Confirmation
        action="Delete"
        text={`Do you want to delete ${nameWallet} from application?`}
        open={confirm}
        setOpen={setConfirm}
        loading={deleteLoading}
        onConfirm={deleteWallet}>
        <DropdownItem danger>
          <Box mr={2}>
            <Delete />
          </Box>
          Delete
        </DropdownItem>
      </Confirmation>
    </Box>
  )

  return (
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
                      {privateWallet && (
                        <MemberAdvancedView
                          horizontal
                          firstName={memberData && memberData.firstName}
                          surname={memberData && memberData.surname}
                          avatarURL={memberData && memberData.avatarURL}
                          role={'owner'}
                        />
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
                        <Typography variant="body1">
                          {formattedAvailableBalance}
                        </Typography>
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
  )
}

WalletAdvancedView.propTypes = {
  idWallet: PropTypes.string,
  nameWallet: PropTypes.string,
  balance: PropTypes.number,
  idMember: PropTypes.string,
  idCurrency: PropTypes.string,
  privateWallet: PropTypes.bool
}

export default WalletAdvancedView
