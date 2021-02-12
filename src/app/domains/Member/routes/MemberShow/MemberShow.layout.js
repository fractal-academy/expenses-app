import { Box } from '@qonsoll/react-design'
import { MemberAdvancedView } from '../../components/views'
import { useSession } from 'app/context/SessionContext'
import { useHistory, useParams } from 'react-router-dom'
import { useStyles } from './MemberShow.styles'
import { useEffect, useState, useCallback } from 'react'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { getData } from 'app/services/Firestore'
import { Confirmation, DropdownItem, Spinner } from 'app/components/Lib'
import firebase from 'app/services/Firebase'
import { Delete, Edit } from '@material-ui/icons'

const MemberShow = (props) => {
  const classes = useStyles()
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const user = useSession()
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (id === user.id) {
      setUserData(user)
    } else {
      setLoading(true)
      const fetchUser = async () => {
        const res = await getData(COLLECTIONS.USERS, id)
        setUserData({ ...res, id })
      }
      fetchUser()
    }
    setLoading(false)
  }, [id])

  const deleteUser = useCallback(async () => {
    setDeleteLoading(true)
    const func = firebase
      .functions()
      .httpsCallable('deleteUser', { timeout: 0 })
    await func({ email: userData.email })
    setDeleteLoading(false)
    setConfirm(false)
    history.push(ROUTES_PATHS.MEMBERS_ALL)
  }, [userData])

  if (loading || !Object.keys(userData).length) {
    return <Spinner />
  }

  // DROPDOWN OVERLAY ELEMENT
  const DropdownList = (
    <Box>
      <DropdownItem
        onClick={() =>
          history.push(`${ROUTES_PATHS.MEMBERS_ALL}/${userData.id}/edit`)
        }>
        <Box mr={2}>
          <Edit />
        </Box>
        Edit
      </DropdownItem>
      <Confirmation
        action="Delete"
        text={`Do you want to delete ${userData.email} from application?`}
        open={confirm}
        setOpen={setConfirm}
        loading={deleteLoading}
        onConfirm={deleteUser}>
        <DropdownItem danger>
          <Box mr={2}>
            <Delete />
          </Box>
          Delete
        </DropdownItem>
      </Confirmation>
    </Box>
  )

  return (
    <>
      <img src="/logo.jpg" alt="Logo" className={classes.headerImage} />
      <Box position="relative" bottom="50px">
        <MemberAdvancedView
          {...userData}
          profile={id === user.id}
          DropdownList={DropdownList}
        />
      </Box>
    </>
  )
}

MemberShow.propTypes = {}

export default MemberShow
