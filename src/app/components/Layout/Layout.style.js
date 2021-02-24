import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  fitContent: {
    flex: '1 1 auto',
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    overflowY: 'auto'
  }
}))
