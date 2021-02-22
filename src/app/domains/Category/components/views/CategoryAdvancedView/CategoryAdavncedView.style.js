import { makeStyles } from '@material-ui/core'
import MuiCustomTheme from '../../../../../config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles({
  border: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.35rem',
    borderBottomLeftRadius: '0.35rem',
    width: '0.25rem',
    height: '2rem',
    left: '0.25rem',
    top: '0.4rem',
    position: 'absolute'
  },
  paper: { position: 'relative' },
  bold: {
    fontWeight: 600
  },
  blue: {
    color: '#1a90ff'
  },
  red: {
    color: '#eb3232'
  },
  divColor: {
    backgroundColor: MuiCustomTheme.palette.text.secondary
  }
})
