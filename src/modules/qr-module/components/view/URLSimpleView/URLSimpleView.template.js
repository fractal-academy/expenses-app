import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip, Typography, IconButton, Button } from '@material-ui/core'
import { CheckCircleOutline, FileCopy } from '@material-ui/icons'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'

/**
 * @info UrlSimpleView (14 Feb 2021) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const UrlSimpleView = () => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()

  // [COMPONENT_STATE_HOOKS]
  const [tooltip, setTooltip] = useState(false)

  // [HELPER_FUNCTIONS]
  const handleTooltipClose = () => setTooltip(false)
  const handleTooltipOpen = () => setTooltip(true)

  // [COMPUTED_PROPERTIES]
  const url = `${process.env.REACT_APP_DOMAIN}${ROUTES_PATHS.QR}/${id}`

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
        <Button>
          <IconButton>
            <FileCopy />
          </IconButton>
        </Button>
      </CopyToClipboard>
    </Tooltip>
  )
}

UrlSimpleView.propTypes = {}

export default UrlSimpleView
