import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from '../../../../../config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles((theme) => ({
  root: { color: MuiCustomTheme.palette.text.secondary }
}))
