import { MenuItem } from '@material-ui/core'
import { ROLES } from 'app/constants'
import PropTypes from 'prop-types'
import { useStyles } from './RoleSingleSelect.styles'
import { Select } from 'app/components'

const RoleSingleSelect = (props) => {
  const classes = useStyles()
  return (
    <Select data={ROLES} value={ROLES[0]} className={classes.root}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RoleSingleSelect.propTypes = {}

export default RoleSingleSelect
