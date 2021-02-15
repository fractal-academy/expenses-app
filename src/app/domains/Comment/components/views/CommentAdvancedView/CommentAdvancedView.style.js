import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  limitWidth: {
    overflowWrap: 'anywhere'
  },
  itemList: {
    marginBottom: theme.spacing(1)
  }
}))
