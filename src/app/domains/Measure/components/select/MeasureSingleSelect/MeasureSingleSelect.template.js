import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import PropTypes from 'prop-types'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react'
import _ from 'lodash'

/**
 * @info MeasureSingleSelect (25 Jan 2021) // CREATION DATE
 *
 * @since 16 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MeasureSingleSelect = (props) => {
  // [INTERFACES]
  const { value, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const [data, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.MEASURES),
    {
      idField: 'id'
    }
  )

  // [COMPONENT_STATE_HOOKS]
  const [measure, setMeasure] = useState()

  // [USE_EFFECTS]
  useEffect(() => {
    if (data && value) {
      const uniq = _.uniqBy([value, ...data], 'measure')
      setMeasure(uniq)
    }
  }, [data])

  // [TEMPLATE]
  return (
    <Select
      loading={loading}
      entity="measures"
      data={measure || data}
      value={value || ''}
      {...rest}>
      {(item, index) => (
        <MenuItem value={item} key={item.id || index}>
          {item.measure}
        </MenuItem>
      )}
    </Select>
  )
}

MeasureSingleSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({ measure: PropTypes.string, id: PropTypes.string }),
    PropTypes.any
  ])
}

export default MeasureSingleSelect
