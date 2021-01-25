import React from 'react'
import Menu from '@material-ui/core/Menu'
import { Box } from '@material-ui/core'

const Dropdown = (props) => {
  const { overlay, children } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      {React.cloneElement(children, { onClick: handleMenu })}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}>
        {React.cloneElement(overlay, { onClick: handleClose })}
      </Menu>
    </Box>
  )
}
export default Dropdown
