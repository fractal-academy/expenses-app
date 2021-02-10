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
import { useStatisticContext } from 'app/context/StatisticsContext'
import moment from 'moment'
import _ from 'lodash'

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
    name: 'Slava',
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
              key={item.name.toString()}
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

// {
//   name: 'Pasha',
//     spent: '3400',
//
//     wallets: [
//   { name: 'Food', spentWallet: '1000' },
//   { name: 'Sweets', spentWallet: '2400' }
// ]
// },

const mockData = [
  {
    assign: 'Pasha',
    price: 100,
    wallet: 'Food',
    dateBuy: 1612742400
  },
  {
    assign: 'Pasha',
    price: 150,
    wallet: 'Kitchen',
    dateBuy: 1612742400
  },
  {
    assign: 'Misha',
    price: 1000,
    wallet: '',
    dateBuy: 1612742400
  }
]
const func = (range) => {
  const rangeStart = moment(range.startDate).format('X')
  const rangeEnd = moment(range.endDate).format('X')
  const arrUsersName = []
  const res = []
  const totalSumUser = []

  //  for create Arr with name categories
  mockData.forEach((item) => {
    if (rangeStart <= item.dateBuy && item.dateBuy <= rangeEnd) {
      arrUsersName.push(item.assign)
    }
  })
  // return new Arr without duplicate name categories
  const resArrUsersName = _.uniqWith(arrUsersName, _.isEqual)
  console.log(resArrUsersName)

  resArrUsersName.forEach((nameUser) => {
    mockData.forEach((item) => {
      if (
        item.assign === nameUser &&
        rangeStart <= item.dateBuy &&
        item.dateBuy <= rangeEnd
      ) {
        res.push(item.price) //arr values single category
        // console.log('res', res)
      }
    })

    totalSumUser.push(res.reduce((a, b) => a + b, 0)) //arr for chart
  })

  // console.log('totalSum', totalSumUser)
}
const CollapseWallet = (props) => {
  const { totalSpending } = props

  const { state } = useStatisticContext()
  // func(state.date)
  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {testUsers.map((item) => (
          <ListItemWitCollapse
            key={item.name.toString()}
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
