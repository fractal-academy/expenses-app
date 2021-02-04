import { useState } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from './CollapseDateRange.styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { DateRange } from 'app/components/Lib/DateRange'

const CollapseDateRangeTemplate = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Filters" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <DateRange />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
}
CollapseDateRangeTemplate.propTypes = {}
CollapseDateRangeTemplate.defaultProps = {}

export default CollapseDateRangeTemplate
