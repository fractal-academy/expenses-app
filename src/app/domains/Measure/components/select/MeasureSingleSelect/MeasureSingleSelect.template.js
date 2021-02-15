import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import PropTypes from 'prop-types'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react'
import _ from 'lodash'

const MeasureSingleSelect = (props) => {
  const { value, ...rest } = props
  const [measures] = useCollectionData(getCollectionRef(COLLECTIONS.MEASURES), {
    idField: 'id'
  })
  const [meas, setMeas] = useState()
  useEffect(() => {
    if (measures && props.value) {
      const uniq = _.uniqBy([props.value, ...measures], 'measure')
      setMeas(uniq)
    }
  }, [measures])
  return (
    <Select data={meas || measures} value={value} {...rest}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item.measure}
        </MenuItem>
      )}
    </Select>
  )
}

MeasureSingleSelect.propTypes = {
  currentMeasure: PropTypes.string.isRequired
}

export default MeasureSingleSelect
