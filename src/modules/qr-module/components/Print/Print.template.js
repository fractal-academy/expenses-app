import React, { forwardRef } from 'react'
import ReactToPrint from 'react-to-print'
import IconButton from '@material-ui/core/IconButton'
import PrintIcon from '@material-ui/icons/Print'

/**
 * @info Print (14 Feb 2021) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const Print = forwardRef((props, ref) => (
  <ReactToPrint
    trigger={() => (
      <IconButton>
        <PrintIcon />
      </IconButton>
    )}
    content={() => ref.current}
  />
))

export default Print
