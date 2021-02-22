import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    //There should be background color from colors CONST (will be able after CONST merge)
    // backgroundColor: 'white',
    position: 'sticky',
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    background: '#2c2c34'
  }
}))
