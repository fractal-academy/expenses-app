import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  appBar: {
    //There should be background color from colors CONST (will be able after CONST merge)
    backgroundColor: 'white'
  },
  toolBar: {
    alignSelf: (props) => props.goBack ?? 'flex-end',
    display: 'flex',
    justifyContent: 'space-between'
  }
})
