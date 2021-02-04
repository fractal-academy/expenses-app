import { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Box } from '@qonsoll/react-design'
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { CurrencySimpleView } from 'domains/Currency/components/views'

const testUsers = [
  {
    name: 'Pasha',
    spent: '3400',
    wallets: [
      { name: 'Food', spentWallet: '1000' },
      { name: 'Sweets', spentWallet: '2400' }
    ]
  },
  {
    name: 'Anonim',
    spent: '500',
    wallets: [
      { name: 'Food', spentWallet: '1000' },
      { name: 'Sweets', spentWallet: '2400' }
    ]
  },
  {
    name: 'Mx',
    spent: '1500',
    wallets: [
      { name: 'Food', spentWallet: '1000' },
      { name: 'Sweets', spentWallet: '2400' }
    ]
  },
  {
    name: 'MrX',
    spent: '10000',
    wallets: [
      { name: 'Food', spentWallet: '1000' },
      { name: 'Sweets', spentWallet: '2400' }
    ]
  }
]
const ListItemWitCollapse = (props) => {
  const { memberName, spent, memberWallet } = props
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <Row width="100%">
          <Col>
            <ListItemText primary={memberName} />
          </Col>
          <Col>
            <Row h="left">
              <Col cw="auto">
                <Box display="flex">
                  <ListItemText primary={spent} />
                  <ListItemText>
                    <CurrencySimpleView />
                  </ListItemText>
                </Box>
              </Col>
            </Row>
          </Col>
          <Col cw="auto"> {open ? <ExpandLess /> : <ExpandMore />}</Col>
        </Row>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {memberWallet.map((item) => (
            <MemberWallets
              walletName={item.name}
              spentCurrentWallet={item.spentWallet}
            />
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  )
}
const MemberWallets = (props) => {
  const { walletName, spentCurrentWallet } = props
  return (
    <>
      <ListItem>
        <Row width="100%">
          <Col>
            <ListItemText primary={walletName} />
          </Col>
          <Col cw="auto">
            <Box display="flex">
              <ListItemText primary={spentCurrentWallet} />
              <ListItemText>
                <CurrencySimpleView />
              </ListItemText>
            </Box>
          </Col>
        </Row>
      </ListItem>
    </>
  )
}

const CollapseWallet = (props) => {
  const { totalSpending } = props
  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {testUsers.map((item) => (
          <ListItemWitCollapse
            memberName={item.name}
            spent={item.spent}
            memberWallet={item.wallets}
          />
        ))}
        <Row>
          <Col />
          <Col cw="auto">
            <Box display="flex">
              <ListItemText primary="Total Spending:" />
              <ListItemText primary={totalSpending} />
              <ListItemText>
                <CurrencySimpleView />
              </ListItemText>
            </Box>
          </Col>
        </Row>
      </List>
    </>
  )
}
CollapseWallet.defaultProps = { totalSpending: '100000' }
export default CollapseWallet
