import Dropdown from './Dropdown.template'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React from 'react'
import { MenuList } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

const metadata = {
  title: 'components/Dropdown',
  component: Dropdown
}

export default metadata

const DropdownList = (
  <>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Profile</MenuItem>
  </>
)

const Template = (args) => (
  <Dropdown overlay={DropdownList}>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit">
      <AccountCircle />
    </IconButton>
  </Dropdown>
)

export const DropdownStory = Template.bind({})

DropdownStory.args = {}
