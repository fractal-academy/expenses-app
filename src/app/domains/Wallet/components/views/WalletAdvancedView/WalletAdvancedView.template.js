import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper } from '@material-ui/core'
import { MemberSimpleView } from 'app/domains/Member/components/views/MemberSimpleView'
import { useStyles } from './WalletAdvancedView.styles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import PaymentIcon from '@material-ui/icons/Payment'
import { CurrencySimpleView } from 'domains/Currency/components/views'

const WalletAdvancedView = (props) => {
  const classes = useStyles()

  const { nameWallet, balance, owner, currency } = props

  return (
    <Container mb={3}>
      <Row>
        <Col>
          <Paper elevation={3} className={classes.styledPaper}>
            <Row height="100%" p={2}>
              <Col>
                <Row h="between" v="center" mb={3}>
                  <Col cw="auto">
                    <Typography variant="h6">{nameWallet}</Typography>
                  </Col>
                  <Col cw="auto">
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="upload picture"
                      component="span">
                      <EditOutlinedIcon />
                    </IconButton>
                  </Col>
                </Row>
                <Row h="between" v="center">
                  <Col cw="auto">
                    <MemberSimpleView withName name={'Olena'} />
                  </Col>
                  <Col cw="auto">
                    <Row>
                      <Col>
                        <Typography variant="caption">Balance</Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Box display="flex">
                          <Typography variant="h6">{balance}</Typography>
                          <CurrencySimpleView variant="h6" value={currency} />
                        </Box>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
  )
}

WalletAdvancedView.propTypes = {}

export default WalletAdvancedView
