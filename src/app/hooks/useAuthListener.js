import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import md5 from 'md5'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services/Auth'
import { getData, setData, setDocumentListener } from 'app/services/Firestore'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { useSessionDispatch, types } from 'app/context/SessionContext'
import { START_PAGE } from 'app/constants/role'
import firebase from 'app/services/Firebase'
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
  const [user, userLoading] = useAuthState(auth)
  const [isInvited, setIsInvited] = useState(true)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const dispatch = useSessionDispatch()
  useEffect(() => {
    let unsubscribe = () => {}
    const fetchUser = async () => {
      try {
        setLoading(true)
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

        //check flag if user come from login page
        const loggedIn = JSON.parse(sessionStorage.getItem('loggedIn'))
        if (loggedIn) {
          history.replace(START_PAGE[data.role.toUpperCase()])
          sessionStorage.setItem('loggedIn', 'false')
        }
        unsubscribe = setDocumentListener(
          COLLECTIONS.USERS,
          md5(user.email),
          (doc) => {
            const userData = doc.data()
            delete userData.isPending
            const data = {
              id: md5(user.email),
              ...userData
            }
            dispatch({ type: types.LOGIN_USER, payload: data })
          }
        )
      } catch (e) {
        //if document not exist that means user wasn't invite
        if (e.message.includes('document not exist.')) {
          setLoading(false)
          return setIsInvited(false)
        }
        console.log(e)
      }
      setLoading(false)
    }

    //if user logout or hasn't login yet
    if (user === null) {
      !userLoading && history.replace(ROUTES_PATHS.LOGIN) && setLoading(false)
    }
    //if user loaded -> fetch his data
    !!user && !userLoading && fetchUser()
    return () => unsubscribe()
  }, [user, userLoading])

  useEffect(() => {
    if (!isInvited) {
      const rejectLogin = async () => {
        const func = firebase
          .functions()
          .httpsCallable('deleteUser', { timeout: 0 })
        await func({ email: user.email, uid: user.uid })
      }
      history.replace(ROUTES_PATHS.REJECT_LOGIN)
      rejectLogin()
    }
  }, [isInvited])
  return { loading, user }
}

export default useAuthListener
