import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import { ROLES } from 'app/constants'
import { Select } from 'components/Lib'
import { useStyles } from './RoleSingleSelect.styles'

const RoleSingleSelect = (props) => {
  const classes = useStyles()
  const { value, ...rest } = props
  return (
    <Select
      entity="roles"
      data={ROLES}
      value={value || 'user'}
      className={classes.root}
      {...rest}>
      {(item) => (
        <MenuItem value={item} key={item} className={classes.menuItem}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RoleSingleSelect.propTypes = {
  value: PropTypes.string.isRequired
}

export default RoleSingleSelect
