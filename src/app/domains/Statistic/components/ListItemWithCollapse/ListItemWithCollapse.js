import { useState } from 'react'
import {
  Collapse,
  Divider,
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
  const { memberName, spent, memberWallet, avatarURL, typeCurrency } = props
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
            <Row h="right">
              <Col cw="auto">
                <Box display="flex">
                  <ListItemText primary={spent.toFixed(2)} />
                  <Box ml={2}>
                    <ListItemText>
                      <CurrencySimpleView
                        value={typeCurrency ? 'UAH' : 'USD'}
                      />
                    </ListItemText>
                  </Box>
                </Box>
              </Col>
            </Row>
          </Col>
          <Col cw="auto">
            {open ? (
              <ExpandLess color={'primary'} />
            ) : (
              <ExpandMore color={'primary'} />
            )}
          </Col>
        </Row>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {memberWallet.map((item) => (
            <MemberWallets
              key={item.name.toString()}
              walletName={item.name}
              spentCurrentWallet={item.spentWallet}
              typeCurrency={typeCurrency}
            />
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  )
}
export default ListItemWithCollapse
