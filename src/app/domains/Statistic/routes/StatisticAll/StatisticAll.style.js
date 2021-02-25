import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from 'app/config/qonsollTheme/MuiCustomTheme'

export const useStyles = makeStyles((theme) => ({
  switcher: {
    transitionDuration: '2s',
    transitionTimingFunction: 'steps(4, end)'
  }
}))
