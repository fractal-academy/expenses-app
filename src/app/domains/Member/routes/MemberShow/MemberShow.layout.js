import { Box } from '@qonsoll/react-design'
import { MemberAdvancedView } from '../../components/views'
import { useSession } from 'app/context/SessionContext'
import { useParams } from 'react-router-dom'
import { useStyles } from './MemberShow.styles'
import { useEffect, useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { getData } from 'app/services/Firestore'
import { Spinner } from 'app/components/Lib'

const MemberShow = (props) => {
  const classes = useStyles()
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const user = useSession()
  const { id } = useParams()
  useEffect(() => {
    if (id === user.id) {
      setUserData(user)
    } else {
      setLoading(true)
      const fetchUser = async () => {
        const res = await getData(COLLECTIONS.USERS, id)
        setUserData(res)
      }
      fetchUser()

      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <img src="/logo.jpg" alt="Logo" className={classes.headerImage} />
      <Box position="relative" bottom="50px">
        <MemberAdvancedView {...userData} />
      </Box>
    </>
  )
}

MemberShow.propTypes = {}
MemberShow.defaultProps = {}

export default MemberShow
