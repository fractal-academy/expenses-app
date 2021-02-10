import Menu from '@material-ui/core/Menu'
import { Box } from '@qonsoll/react-design'
import { cloneElement, useState } from 'react'

const Dropdown = (props) => {
  // INTERFACE
  const { overlay, children, idMenu, id } = props

  // STATE
  const [anchorEl, setAnchorEl] = useState(null)

  // COMPUTED PROPERTIES
  const open = Boolean(anchorEl)

  // HELPER FUNCTIONS
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // TEMPLATE
  return (
    <Box>
      {cloneElement(children, { onClick: handleOpen })}
      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}>
        <div>{cloneElement(overlay, { id: id, onClick: handleClose })}</div>
      </Menu>
    </Box>
  )
}

export default Dropdown
