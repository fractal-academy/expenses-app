import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import PropTypes from 'prop-types'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const MeasureSingleSelect = (props) => {
  const [measures, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.MEASURES),
    { idField: 'id' }
  )
  return (
    <Select
      data={measures || []}
      value={(measures && measures[0]) || {}}
      {...props}>
      {(item) =>
        !loading && (
          <MenuItem value={item} key={item}>
            {item.measure}
          </MenuItem>
        )
      }
    </Select>
  )
}

MeasureSingleSelect.propTypes = {
  currentMeasure: PropTypes.string.isRequired
}

export default MeasureSingleSelect
