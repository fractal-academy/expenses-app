import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper } from '@material-ui/core'
import { MemberAdvancedView } from 'domains/Member/components/views/MemberAdvancedView'
import { WalletCombined } from 'domains/Wallet/components/combined/WalletCombined'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { useStyles } from './WalletAdvancedView.styles'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'

const DropdownList = (
  <>
    <WalletCombined title="Edit wallet" typeModalEdit>
      <DropdownItem>
        <Box mr={2}>
          <Edit />
        </Box>
        Edit
      </DropdownItem>
    </WalletCombined>
    <DropdownItem danger>
      <Box mr={2}>
        <Delete />
      </Box>
      Delete
    </DropdownItem>
  </>
)

const WalletAdvancedView = (props) => {
  const classes = useStyles()

  const { nameWallet, balance, owner, currency, avatarUrl } = props

  return (
    <Container>
      <Row>
        <Col>
          <Paper elevation={3} className={classes.styledPaper}>
            <Container p={2}>
              <Row>
                <Col>
                  <Row h="between" v="center" mb={4}>
                    {/*there are name of wallet and drop down with edit and delete functions*/}
                    <Col cw="auto">
                      <Typography variant="h6">{nameWallet}</Typography>
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
                      <MemberAdvancedView
                        horizontal
                        role={'owner'}
                        name={owner}
                        avatarUrl={avatarUrl}
                      />
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
                        <CurrencySimpleView variant="body1" value={currency} />
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

WalletAdvancedView.propTypes = {}

export default WalletAdvancedView
