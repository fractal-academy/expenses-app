import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import md5 from 'md5'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services/Auth'
import { getData } from 'app/services/Firestore'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
//HELPERS
const loginUser = (user) => {}

const useAuthListener = () => {
  const [user, loading, error] = useAuthState(auth)
  const [reqError, setReqError] = useState(false)
  const [load, setLoad] = useState(true)
  let history = useHistory()
  console.log(user, loading, error)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoad(true)
        const res = await getData(COLLECTIONS.USERS, md5(user.email))
        console.log(res)
      } catch (e) {
        if (e.message === 'document not exist.') {
          setLoad(false)
          return setReqError(true)
        }
      }
      setLoad(false)
    }
    if (user === null) {
      history.replace(ROUTES_PATHS.LOGIN)
      !loading && setLoad(false)
    }
    !loading && fetchUser()
  }, [user, loading])
  console.log(reqError)
  useEffect(() => reqError && history.replace(ROUTES_PATHS.REJECT_LOGIN), [
    reqError
  ])
  // useEffect(() => !load && setLoad(loading), [loading])
  return { loading: load }
}

export default useAuthListener
