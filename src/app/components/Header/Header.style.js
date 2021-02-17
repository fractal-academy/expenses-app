import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from '../../config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    //There should be background color from colors CONST (will be able after CONST merge)
    // backgroundColor: 'white',
    position: 'sticky',
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    background: MuiCustomTheme.palette.background.paper
  },
  toolBar: {
    alignSelf: (props) => (props.title || props.goBack) ?? 'flex-end',
    display: 'flex',
    justifyContent: 'space-between'
  },
  divider: {
    height: theme.spacing(3),
    marginRight: theme.spacing(1.5)
  }
}))
