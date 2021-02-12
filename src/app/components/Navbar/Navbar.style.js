import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    top: 'auto',
    bottom: 0,
    marginTop: theme.spacing(2),
    position: 'sticky'
  }
}))
