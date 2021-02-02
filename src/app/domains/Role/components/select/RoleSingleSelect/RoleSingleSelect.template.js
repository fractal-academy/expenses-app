import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import { ROLES } from 'app/constants'
import { Select } from 'components/Lib'
import { useStyles } from './RoleSingleSelect.styles'

const RoleSingleSelect = (props) => {
  const classes = useStyles()

  return (
    <Select data={ROLES} value={ROLES[0]} className={classes.root} {...props}>
      {(item) => (
        <MenuItem value={item} key={item} className={classes.menuItem}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RoleSingleSelect.propTypes = {}

export default RoleSingleSelect
