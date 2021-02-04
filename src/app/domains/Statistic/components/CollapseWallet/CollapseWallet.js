import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Collapse from '@material-ui/core/Collapse'
import { Row, Container, Col } from '@qonsoll/react-design'
import { useStyles } from 'domains/Statistic/components/CollapseDateRange/CollapseDateRange.styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

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
            <ListItemText primary={spent} />
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
            <ListItemText primary={spentCurrentWallet} />
          </Col>
        </Row>
      </ListItem>
    </>
  )
}

const CollapseWallet = (props) => {
  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      {testUsers.map((item) => (
        <ListItemWitCollapse
          memberName={item.name}
          spent={item.spent}
          memberWallet={item.wallets}
        />
      ))}
    </List>
  )
}

export default CollapseWallet
