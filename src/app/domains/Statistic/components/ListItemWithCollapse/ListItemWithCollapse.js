import { useState } from 'react'
import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { Box, Col, Row } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { MemberWallets } from 'app/domains/Statistic/components/MemberWallets'
import { MemberSimpleView } from 'domains/Member/components/views'

const ListItemWithCollapse = (props) => {
  const { memberName, spent, memberWallet, avatarURL } = props
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <Row width="100%">
          <Col cw="auto">
            <MemberSimpleView avatarURL={avatarURL} />
          </Col>
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
export default ListItemWithCollapse
