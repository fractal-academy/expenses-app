import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Avatar } from '../Avatar'
import { useStyles } from './AvatarUploader.styles'
import { LoadingButton } from '../../index'
import upload from 'app/services/Storage/upload'

/**
 * @info RecruiterListItem (26 Jan 2021) // CREATION DATE
 * *
 * @since 10 Feb 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CustomAvatarUploader = (props) => {
  // can choose and upload photo to form
  // after will see a selected photo
  const { onChange, value } = props
  //onChange - function provides the ability to attach a parent component to it
  //value is props for this component (it is avatarUrl)

  // [ADDITIONAL_HOOKS]
  const classes = useStyles()

  // [COMPONENT_STATE_HOOKS]
  const fileUpload = useRef(null)
  const [avatarUrl, setAvatarUrl] = useState(value)
  const [loading, setLoading] = useState(false)
  // [HELPER_FUNCTIONS]
  const fileUploadClick = () => {
    fileUpload.current.click()
  }

  //upload photo to storage and form
  const changeAvatar = async () => {
    try {
      setLoading(true)
      //add url to storage
      const url = await upload(
        fileUpload.current.files[0],
        fileUpload.current.files[0].name
      )

      setAvatarUrl(url)

      //this value will be available in the parent component
      onChange && onChange(url)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => value && setAvatarUrl(value), [value])

  return (
    <Container>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <Avatar src={avatarUrl} size="lg" />
        </Col>
      </Row>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <LoadingButton
            loading={loading}
            size="small"
            color="primary"
            onClick={fileUploadClick}
            className={classes.button}
            component={'span'}
            startIcon={<CloudUploadIcon />}>
            Upload photo
          </LoadingButton>
          <input
            accept="image/*"
            className={classes.uploader}
            type="file"
            ref={fileUpload}
            onChange={changeAvatar}
          />
        </Col>
      </Row>
    </Container>
  )
}

CustomAvatarUploader.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default CustomAvatarUploader
