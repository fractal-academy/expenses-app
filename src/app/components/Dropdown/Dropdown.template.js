import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Dropdown = (props) => {
  const { overlay, children } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
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
    </div>
  )
}
export default Dropdown
