import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Avatar } from '../Avatar'
import { useStyles } from './AvatarUploader.styles'

const CustomAvatarUploader = (props) => {
  const classes = useStyles()
  // can choose and upload photo to form
  // after will see a selected photo
  const { onChange, value } = props
  //onChange - function provides the ability to attach a parent component to it
  //value is props for this component (it is avatarUrl)

  const fileUpload = useRef(null)

  const [avatarUrl, setAvatarUrl] = useState(value)

  const fileUploadClick = () => {
    fileUpload.current.click()
  }

  //TODO create service for storage upload
  const changeAvatar = async () => {
    //   //upload photo to storage and form
    //   const fileRef = STORAGE.ref().child(fileUpload.current.files[0].name)
    //   await fileRef.put(fileUpload.current.files[0]) //add url to storage
    //   fileRef.getDownloadURL().then((url) => {
    //     //get url from storage
    //     setAvatarUrl(url)
    //     onChange(url) //this value will be available in the parent component
    //   })
  }

  return (
    <Container>
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
            onClick={fileUploadClick}
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
    </Container>
  )
}

CustomAvatarUploader.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default CustomAvatarUploader
