import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper, Divider } from '@material-ui/core'
import { WalletCombined } from 'domains/Wallet/components/combined/WalletCombined'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { Confirmation } from 'app/components/Lib/Confirmation'
import { useStyles } from './WalletAdvancedView.styles'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'
import { useState } from 'react'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { COLLECTIONS } from 'app/constants'
import { deleteData } from 'app/services/Firestore'
import PropTypes from 'prop-types'
import formatCurrency from 'format-currency'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext/hooks'

const WalletAdvancedView = (props) => {
  // INTERFACE
  const {
    idWallet,
    idMember,
    nameWallet,
    balance,
    idCurrency,
    privateWallet
  } = props

  // STATE
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  //CUSTOM HOOKS
  const classes = useStyles()
  const messageDispatch = useMessageDispatch()
  const user = useSession()

  // HELPER FUNCTIONS
  const formattedAvailableBalance = formatCurrency(balance)
  const deleteWallet = async () => {
    setDeleteLoading(true)
    try {
      await deleteData(COLLECTIONS.WALLETS, idWallet)
      Logger('Delete wallet', `Wallet '${nameWallet}' was deleted`, user)
      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: 'Wallet successfully deleted'
      })
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: error
      })
    }
    setDeleteLoading(false)
  }

  //TEMPLATE
  const DropdownList = (
    <Box>
      <WalletCombined
        title={`Editing ${nameWallet}`}
        typeModalEdit
        idWallet={idWallet}
        nameWallet={nameWallet}
        idMember={idMember}
        balance={balance}
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
              <Row mb={2}>
                <Col>
                  <Row h="between" v="center">
                    {/*there are name of wallet and drop down with edit and delete functions*/}

                    <Col cw="auto">
                      <Typography variant="body1" className={classes.bold}>
                        {nameWallet}
                      </Typography>
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
              <Row mb={3}>
                <Col>
                  <Divider />
                </Col>
              </Row>
              <Row v="center">
                <Col cw="auto">
                  {/*there is info about balance*/}

                  <Row>
                    <Col>
                      <Typography
                        variant="caption"
                        color={'textSecondary'}
                        className={
                          formattedAvailableBalance < 0 && classes.red
                        }>
                        Balance
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Box display="flex">
                        <Typography
                          variant="body1"
                          className={
                            formattedAvailableBalance < 0 && classes.red
                          }>
                          {formattedAvailableBalance}
                        </Typography>
                        <CurrencySimpleView
                          className={
                            formattedAvailableBalance < 0 && classes.red
                          }
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
