import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import md5 from 'md5'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services/Auth'
import { getData, setData } from 'app/services/Firestore'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { useSessionDispatch, types } from 'app/context/SessionContext'

/**
 *
 * @param {firebase.User} user
 * @param {object} userData
 * @returns {object} user data
 */
const activateUser = async (user, userData) => {
  const userName = user.displayName.split(' ')
  const data = {
    ...userData,
    isPending: false,
    avatarURL: user.photoURL,
    firstName: userName[0],
    surname: userName[1]
  }
  await setData(COLLECTIONS.USERS, md5(user.email), data)
  return data
}

const useAuthListener = () => {
  const [user, loading] = useAuthState(auth)
  const [isInvited, setIsInvited] = useState(true)
  const [load, setLoad] = useState(true)
  let history = useHistory()
  const dispatch = useSessionDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoad(true)
        let userData = await getData(COLLECTIONS.USERS, md5(user.email))

        //first login after invite
        if (userData.isPending) {
          userData = await activateUser(user, userData)
        }

        //prepare user data for context
        delete userData.isPending
        const data = {
          id: user.uid,
          ...userData
        }
        dispatch({ type: types.LOGIN_USER, payload: data })
      } catch (e) {
        //if document not exist that means user wasn't invite
        if (e.message.includes('document not exist.')) {
          setLoad(false)
          return setIsInvited(false)
        }
        console.log(e)
      }
      setLoad(false)
    }
    //if user logout or hasn't login yet
    if (user === null) {
      history.replace(ROUTES_PATHS.LOGIN)
      !loading && setLoad(false)
    }
    //if user loaded -> fetch his data
    !loading && fetchUser()
  }, [user, loading])

  useEffect(() => !isInvited && history.replace(ROUTES_PATHS.REJECT_LOGIN), [
    isInvited
  ])
  return { loading: load, user }
}

export default useAuthListener
