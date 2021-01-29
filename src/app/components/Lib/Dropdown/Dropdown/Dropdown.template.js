import Menu from '@material-ui/core/Menu'
import { Box } from '@qonsoll/react-design'
import { cloneElement, useState } from 'react'

const Dropdown = (props) => {
  const { overlay, children, idMenu } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      {cloneElement(children, { onClick: handleOpen })}
      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}>
        <div>{cloneElement(overlay, { onClick: handleClose })}</div>
      </Menu>
    </div>
  )
}

export default Dropdown
