import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from '../../config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles((theme) => ({
  root: {
    top: 'auto',
    bottom: 0,
    marginTop: theme.spacing(2),
    position: 'sticky',
    boxShadow: 'none'
  },
  bottomNav: {
    // background: MuiCustomTheme.palette.grey['100']
  },
  noShad: {}
}))
