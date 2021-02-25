import { useState } from 'react'
import { useStyles } from './CollapseDateRange.styles'
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { DateRange } from 'app/components/Lib/DateRange'

const CollapseDateRangeTemplate = () => {
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
        <ListItemText
          primary="Custom period"
          primaryTypographyProps={{
            variant: 'overline',
            color: open ? 'primary' : 'textSecondary',
            size: '20px'
          }}
        />
        {open ? (
          <ExpandLess color={'primary'} />
        ) : (
          <ExpandMore color={'primary'} />
        )}
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

export default CollapseDateRangeTemplate
