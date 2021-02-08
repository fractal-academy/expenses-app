import { Box } from '@qonsoll/react-design'
import { cloneElement, useState } from 'react'
import { Popover } from '@material-ui/core'

const posBottom = { vertical: 'bottom', horizontal: 'center' }
const transfBottom = { vertical: 'top', horizontal: 'center' }

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
    <Box>
      {cloneElement(children, { onClick: handleOpen })}
      <Popover
        id={idMenu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={posBottom}
        transformOrigin={transfBottom}>
        <div>{cloneElement(overlay, { onClick: handleClose })}</div>
      </Popover>
    </Box>
  )
}

export default Dropdown
