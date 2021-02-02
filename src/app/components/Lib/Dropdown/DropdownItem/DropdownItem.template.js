import MenuItem from '@material-ui/core/MenuItem'
import { styled } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const StyledMenuItem = (props) => {
  const { danger, success, ...rest } = props
  return <MenuItem {...rest} />
}

const DropdownItem = styled(StyledMenuItem)((props) => {
  if (props.danger) {
    return {
      color: props.theme.palette.error.main,
      transition: `all 0.${props.theme.transitions.duration.short}s ${props.theme.transitions.easing.easeInOut}`,
      '&:hover': {
        backgroundColor: fade(props.theme.palette.error.main, 0.12)
      }
    }
  }
  if (props.success) {
    return {
      color: props.theme.palette.success.main,
      transition: `all 0.${props.theme.transitions.duration.short}s ${props.theme.transitions.easing.easeInOut}`,
      '&:hover': {
        backgroundColor: fade(props.theme.palette.success.main, 0.12)
      }
    }
  }
})

export default DropdownItem
