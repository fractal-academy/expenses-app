import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getData } from 'app/services'
import { COLLECTIONS } from 'app/constants'

const MeasureSingleSelect = (props) => {
  const [currentMeasure, setCurrentMeasure] = useState('')
  const [measures, setMeasures] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getData(COLLECTIONS.MEASURES)
      const dataArray = Object.values(data).map((item) => item.measure)
      setMeasures(dataArray)
      setCurrentMeasure(dataArray[0])
    }
    fetchCategories()
  }, [])
  return (
    <Select data={measures} value={currentMeasure} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

MeasureSingleSelect.propTypes = {
  currentMeasure: PropTypes.string.isRequired
}

export default MeasureSingleSelect
