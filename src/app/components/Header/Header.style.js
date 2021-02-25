import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from '../../config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
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
    marginRight: theme.spacing(1.5),
    background: MuiCustomTheme.palette.text.secondary
  }
}))
