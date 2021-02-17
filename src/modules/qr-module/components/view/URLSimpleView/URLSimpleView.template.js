import { useState } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip, Typography, IconButton } from '@material-ui/core'
import { CheckCircleOutline, FileCopy } from '@material-ui/icons'
import { Box } from '@qonsoll/react-design'

/**
 * @info UrlSimpleView (14 Feb 2021) // CREATION DATE
 *
 * @since 16 Feb 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const UrlSimpleView = (props) => {
  // [INTERFACES]
  const { url } = props

  // [COMPONENT_STATE_HOOKS]
  const [tooltip, setTooltip] = useState(false)

  // [HELPER_FUNCTIONS]
  const handleTooltipClose = () => setTooltip(false)
  const handleTooltipOpen = () => setTooltip(true)

  // title layout
  const title = (
    <Box display="flex" alignItems="center">
      <Box pr={1}>
        <CheckCircleOutline fontSize="small" />
      </Box>
      <Typography variant="caption">Copied</Typography>
    </Box>
  )

  // [TEMPLATE]
  return (
    <Tooltip title={title} open={tooltip} onClose={handleTooltipClose}>
      <CopyToClipboard text={url} onCopy={handleTooltipOpen}>
        <Box>
          <IconButton component="span">
            <FileCopy />
          </IconButton>
        </Box>
      </CopyToClipboard>
    </Tooltip>
  )
}

UrlSimpleView.propTypes = {
  url: PropTypes.string
}

export default UrlSimpleView
