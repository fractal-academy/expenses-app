import { Box } from '@qonsoll/react-design'
import { MemberAdvancedView } from '../../components/views'
import { useSession } from 'app/context/SessionContext'
import { useStyles } from './MemberShow.styles'

const MemberShow = (props) => {
  const classes = useStyles()
  const user = useSession()
  return (
    <>
      <img src="/logo.jpg" alt="Logo" className={classes.headerImage} />
      <Box position="relative" bottom="50px">
        <MemberAdvancedView {...user} />
      </Box>
    </>
  )
}

MemberShow.propTypes = {}
MemberShow.defaultProps = {}

export default MemberShow
