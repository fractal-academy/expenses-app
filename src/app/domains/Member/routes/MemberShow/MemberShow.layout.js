import { useState, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Box } from '@qonsoll/react-design'
import { Delete, Edit } from '@material-ui/icons'
import { useSession } from 'app/context/SessionContext'
import firebase from 'app/services/Firebase'
import { getCollectionRef } from 'app/services/Firestore'
import { MemberAdvancedView } from 'domains/Member/components/views'
import { Confirmation, DropdownItem, Spinner } from 'app/components/Lib'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { useStyles } from './MemberShow.styles'
import { useLogger } from 'app/utils'

/**
 * @info MemberShow (18 Jan 2021) // CREATION DATE
 *
 * @since 13 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MemberShow = () => {
  // [ADDITIONAL_HOOKS]
  const user = useSession()
  const { id } = useParams()
  const history = useHistory()
  const classes = useStyles()
  const [userData, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(id),
    { idField: 'id' }
  )
  const onDeleteUserLogger = useLogger('Delete', `One of users was deleted`)
  // [COMPONENT_STATE_HOOKS]
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [confirm, setConfirm] = useState(false)

  // [HELPER_FUNCTIONS]
  const deleteUser = onDeleteUserLogger(
    useCallback(async () => {
      setDeleteLoading(true)
      const func = firebase
        .functions()
        .httpsCallable('deleteUser', { timeout: 0 })
      await func({ email: userData.email })
      setDeleteLoading(false)
      setConfirm(false)
      history.push(ROUTES_PATHS.MEMBERS_ALL)
    }, [userData])
  )

  if (loading || !userData) {
    return <Spinner />
  }

  // [COMPUTED_PROPERTIES]
  const EDIT_PATH = `${ROUTES_PATHS.MEMBERS_ALL}/${id}/edit`

  // DROPDOWN OVERLAY ELEMENT
  const DropdownList = (
    <Box>
      <DropdownItem onClick={() => history.push(EDIT_PATH)}>
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

  //[TEMPLATE]
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
