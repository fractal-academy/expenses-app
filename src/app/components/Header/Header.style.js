import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    //There should be background color from colors CONST (will be able after CONST merge)
    backgroundColor: 'white',
    position: 'sticky',
    marginBottom: theme.spacing(2)
  },
  toolBar: {
    alignSelf: (props) => props.goBack ?? 'flex-end',
    display: 'flex',
    justifyContent: 'space-between'
  },
  divider: {
    height: theme.spacing(3),
    margin: theme.spacing(2)
  }
}))
