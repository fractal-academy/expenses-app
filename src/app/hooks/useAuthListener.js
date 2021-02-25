import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import md5 from 'md5'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services/Auth'
import {
  getCollectionRef,
  getData,
  setData,
  setDocumentListener,
  addData,
  getTimestamp
} from 'app/services/Firestore'
import { COLLECTIONS, ROUTES_PATHS, EMAIL_DOMAIN } from 'app/constants'
import {
  useSessionDispatch,
  types,
  useSession
} from 'app/context/SessionContext'
import { START_PAGE } from 'app/constants/role'
import { callFunction, func } from 'app/services/Functions'
/**
 *
 * @param {firebase.User} user
 * @param {object} userData
 * @returns {object} user data
 */
const activateUser = async (user, userData) => {
  let userName = user.displayName.split(' ')
  if (!user.displayName) {
    userName = ['', '']
  }
  const data = {
    email: user.email,
    role: 'admin',
    ...userData,
    isPending: false,
    firstName: userName[0],
    surname: userName[1]
  }

  if (user.photoURL) {
    data.avatarURL = user.photoURL
  }

  await setData(COLLECTIONS.USERS, md5(user.email), data)

  return data
}

/**
 * @info RecruiterListItem (09 Feb 2021) // CREATION DATE
 *
 * @comment Authenticate hook
 *
 * @since 12 Feb 2021 ( v.0.1.0 ) // LAST-EDIT DATE
 *
 * @return {Object [type=hook]}
 */

const FIRST_USER_EMAIL_DOMAIN = EMAIL_DOMAIN

const useAuthListener = () => {
  // [ADDITIONAL_HOOKS]
  const [user, userLoading] = useAuthState(auth)
  const history = useHistory()
  const session = useSession()
  const dispatch = useSessionDispatch()

  // [STATE_HOOKS]
  const [isInvited, setIsInvited] = useState(true)
  const [loading, setLoading] = useState(true)

  // [HELPER_FUNCTIONS]
  const rejectLogin = useCallback(async (email, uid) => {
    const deleteUser = callFunction(func.DELETE_USER)
    await deleteUser({ email, uid })
    setLoading(false)
    sessionStorage.removeItem('reject')
  }, [])

  const checkFirstUser = async (user) => {
    try {
      await getData(COLLECTIONS.USERS)
    } catch (e) {
      if (
        e.message.includes('Empty collection') &&
        user.email.includes(FIRST_USER_EMAIL_DOMAIN)
      ) {
        const userData = await activateUser(user)
        setUserToContext(userData)
        return false
      }
      console.log(e)
    }
    return true
  }

  // Adding notifications for all admin that user has accepted the invite to the application
  const addNotificationAboutNewUser = async () => {
    const res = await getCollectionRef(COLLECTIONS.USERS)
      .where('role', '==', 'admin')
      .get()

    let adminIds = {}

    res.docs.forEach((item) => (adminIds = { ...adminIds, [item.id]: false }))

    await addData(COLLECTIONS.NOTIFICATIONS, {
      date: getTimestamp().now(),
      text: `User '${user.displayName}' accepted invitation to the app`,
      userId: res.docs.map((item) => item.id),
      viewed: adminIds
    })
  }

  const setUserToContext = (userData) => {
    //prepare user data for context
    delete userData.isPending
    const data = {
      id: md5(user.email),
      ...userData
    }
    dispatch({ type: types.LOGIN_USER, payload: data })
    //check flag if user come from login page
    const loggedIn = JSON.parse(sessionStorage.getItem('loggedIn'))
    if (loggedIn) {
      sessionStorage.removeItem('loggedIn')
      history.push(START_PAGE[data.role.toUpperCase()])
    }
  }

  // [USE_EFFECTS]
  useEffect(() => {
    setLoading(true)
    const fetchUser = async () => {
      try {
        setLoading(true)
        let userData = await getData(COLLECTIONS.USERS, md5(user.email))

        //first login after invite
        if (userData.isPending) {
          try {
            userData = await activateUser(user, userData)
            addNotificationAboutNewUser()
          } catch (e) {
            console.log(e)
            setLoading(false)
          }
        }

        setUserToContext(userData)

        setLoading(false)
      } catch (e) {
        //if document not exist that means user wasn't invite
        if (e.message.includes('document not exist.')) {
          setLoading(true)
          sessionStorage.setItem('reject', 'true')
          return setIsInvited(false)
        }
        console.log(e)
      }
    }

    //if user logout or hasn't login yet
    if (user === null) {
      dispatch({ type: types.LOGOUT_USER })
      !userLoading && history.push('')
      setLoading(userLoading)
    }
    //if user loaded -> fetch his data
    user && !userLoading && fetchUser()
    //finish loading only after session is set
    user && session && setLoading(false)
  }, [user, userLoading])

  useEffect(() => {
    const unsubscribe =
      user &&
      setDocumentListener(COLLECTIONS.USERS, md5(user.email), (doc) => {
        const userData = doc.data()
        //if user was deleted and hi didn't come from login page
        if (!userData && !JSON.parse(sessionStorage.getItem('reject'))) {
          setLoading(true)
          auth.signOut()
          dispatch({ type: types.LOGOUT_USER })
          history.push(ROUTES_PATHS.LOGIN)
          setLoading(false)
        } else if (userData) {
          //update user context
          delete userData.isPending
          const data = {
            id: md5(user.email),
            ...userData
          }
          dispatch({ type: types.LOGIN_USER, payload: data })
        }
      })
    return () => unsubscribe && unsubscribe()
  }, [user])

  useEffect(() => {
    if (!isInvited) {
      const reject = async () => {
        setLoading(true)
        const res = await checkFirstUser(user)
        if (res) {
          history.push(ROUTES_PATHS.REJECT_LOGIN)
          setLoading(false)
          rejectLogin(user.email, user.uid)
        }
        setLoading(false)
      }
      user && reject()
    }
  }, [isInvited])
  return { loading, user }
}

export default useAuthListener
