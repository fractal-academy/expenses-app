import { useState, useEffect } from 'react'

const useDocumentListener = (action, collection, document) => {
  //action is an function in firebase (getData. getDataWithFilter...)
  //collection is an collection`s name in firebase
  //document [optionally]
  const [data, setData] = useState()
  //data is a received data
  const [loading, setLoading] = useState(false)
  //loading is status
  useEffect(
    () =>
      action(collection, document).then((data) => {
        setData(data)
        setLoading(true)
      }),
    []
  )
  return { data, loading }
}

export default useDocumentListener
