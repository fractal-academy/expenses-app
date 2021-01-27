import React from 'react'
import Menu from '@material-ui/core/Menu'
import { Box, MenuItem } from '@material-ui/core'
import styles from './Dropdown.style'
import { makeStyles } from '@material-ui/core/styles'
import DropdownItem from './DropdownItem/DropdownItem.template'

const useStyles = makeStyles(styles)

const Dropdown = (props) => {
  const classes = useStyles()
  const { overlay, children, idMenu } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      {React.cloneElement(children, { onClick: handleOpen })}
      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}>
        <Box>{React.cloneElement(overlay, { onClick: handleClose })}</Box>
      </Menu>
      {/*<DropdownItem>weqweqweq</DropdownItem>*/}
    </Box>
  )
}
Dropdown.propTypes = {}
Dropdown.defaultProps = {}

export default Dropdown
