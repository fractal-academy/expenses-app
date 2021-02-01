import { makeStyles } from '@material-ui/core'

const getColorBar = (props) => {
  if (props.value > 99) {
    return 'red'
  }
  return '#1a90ff'
}

export const useStyle = makeStyles((theme) => {
  return {
    root: {
      height: 10,
      borderRadius: 5,

      '&> .MuiLinearProgress-bar': {
        borderRadius: 5,
        transition: 'background-color 0.2s ease',
        backgroundColor: (props) => getColorBar(props)
      }
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    }
  }
})
