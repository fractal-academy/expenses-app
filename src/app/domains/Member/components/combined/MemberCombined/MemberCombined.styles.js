import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(2),
      transform: 'translate(0,-100%)',
      zIndex: theme.zIndex.tooltip
    }
  }
})
