import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { InView } from 'react-intersection-observer'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Box } from '@qonsoll/react-design'
import { Spinner } from 'components/Lib'
import { getCollectionRef } from 'app/services/Firestore'

/**
 * @info InfiniteScroll (25 Feb 2021) // CREATION DATE
 *
 * @comment InfiniteScroll - component that can fetch limited portion of data from some collection.
 *
 * @since 25 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const InfiniteScroll = (props) => {
  // [INTERFACES]
  const {
    as,
    children,
    collectionName,
    order,
    limit,
    idField,
    onReachEnd
  } = props

  // [ADDITIONAL_HOOKS]
  // FIXME - what if i need "where" in query, or more complex query?
  const [firstData, firstLoading] = useCollectionData(
    getCollectionRef(collectionName)
      .orderBy(order.field, order.type ?? 'asc')
      .limit(limit),
    idField && { idField }
  )

  // [COMPONENT_STATE_HOOKS]
  const [lastElement, setLastElement] = useState(false)
  const [data, setData] = useState(firstData)
  const [loading, setLoading] = useState(firstLoading)

  // [HELPER_FUNCTIONS]
  const handleUpdate = async (isView) => {
    if (isView && !firstLoading) {
      setLoading(true)
      try {
        // Get new data snapshot
        const res = await getCollectionRef(collectionName)
          .orderBy(order.field, order.type ?? 'asc')
          .startAfter(lastElement && lastElement[order.field])
          .limit(limit)
          .get()
        if (!res.size) {
          // If get all collection data
          onReachEnd && onReachEnd()
        } else {
          // Transform data snapshot to valid data object
          const resData = res.docs.map((snapshot) => {
            if (idField) {
              return {
                ...snapshot.data(),
                [idField]: snapshot.id
              }
            }
            return snapshot.data()
          })

          // Attach new data to array
          setData(data.concat(resData))
          //get last element to know where to start new query
          setLastElement(_.last(resData))
        }
      } catch (e) {
        console.log(e)
      }

      setLoading(false)
    }
  }

  // [USE_EFFECTS]
  useEffect(() => {
    if (firstData) {
      setData((prevData) => {
        if (prevData) {
          return _.unionBy(firstData, order.field).concat(prevData)
        }
        // Get last element to know where to start new query
        setLastElement(_.last(firstData))
        return firstData
      })
      setLoading(false)
    }
  }, [firstData])

  // [TEMPLATE]
  return (
    <>
      {firstLoading || !data ? (
        <Spinner />
      ) : (
        React.createElement(as ?? Fragment, { children: data.map(children) })
      )}

      <InView as={Box} onChange={handleUpdate} mb={2}>
        {loading && <Spinner />}
      </InView>
    </>
  )
}

InfiniteScroll.propTypes = {
  collectionName: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  order: PropTypes.shape({
    field: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  limit: PropTypes.number,
  idField: PropTypes.string,
  onReachEnd: PropTypes.func
}

InfiniteScroll.defaultProps = {
  limit: 10
}
export default InfiniteScroll
