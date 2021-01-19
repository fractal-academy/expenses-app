import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  }
})

const SessionSimpleView = (props) => {
  const classes = useStyles(props)
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4">Sign in</Typography>
      </Box>
      <Box
        display="flex"
        p={1}
        justifyContent="center"
        className={classes.root}>
        <Typography variant="subtitle2">
          Use your company Google account @senseteq.io to log in.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" m={4}>
        <Button variant="outlined" color="primary">
          <Box display="flex" justifyContent="center" pr={1}>
            <GTranslateOutlinedIcon />
          </Box>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  )
}

SessionSimpleView.propTypes = {}
SessionSimpleView.defaultProps = {}

export default SessionSimpleView
