import { useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Row, Col } from '@qonsoll/react-design'
import { Avatar } from '../Avatar'
import { EXPENSES_PROJECT } from 'app/constants'
import styles from './AvatarUploader.styles'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

const CustomAvatarUploader = (props) => {
  const { onChange, value } = props

  const fileUpload = useRef(null)

  const [avatarUrl, setAvatarUrl] = useState(value)

  const fileUploadClick = (event) => {
    fileUpload.current.click()
  }
  const changeAvatar = async () => {
    var fileRef = EXPENSES_PROJECT.storage()
      .ref()
      .child(fileUpload.current.files[0].name)
    await fileRef.put(fileUpload.current.files[0])
    fileRef.getDownloadURL().then((url) => {
      setAvatarUrl(url)
      onChange(url)
    })
  }

  const classes = useStyles()
  return (
    <>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <Avatar src={avatarUrl} size="lg" />
        </Col>
      </Row>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <Button
            size="small"
            color="primary"
            onClick={(event) => fileUploadClick(event)}
            variant="contained"
            className={classes.button}
            component={'span'}
            startIcon={<CloudUploadIcon />}>
            Upload photo
          </Button>
          <input
            accept="image/*"
            className={classes.uploader}
            type="file"
            ref={fileUpload}
            onChange={changeAvatar}
          />
        </Col>
      </Row>
    </>
  )
}

CustomAvatarUploader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default CustomAvatarUploader
