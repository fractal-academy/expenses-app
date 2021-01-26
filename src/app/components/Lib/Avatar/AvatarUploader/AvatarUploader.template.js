import { useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Row, Col } from '@qonsoll/react-design'
import { Avatar } from '../Avatar'
import { EXPENSES_PROJECT } from 'app/constants'

const CustomAvatarUploader = (props) => {
  const { onChange, value } = props

  const fileUpload = useRef(null)

  const [avatar, setAvatar] = useState(value)

  const fileUploadClick = (event) => {
    fileUpload.current.click()
  }
  const changeAvatar = async () => {
    var file = fileUpload.current.files[0]
    var storageRef = EXPENSES_PROJECT.storage().ref()
    var fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    const s = await fileRef.getDownloadURL()
    setAvatar(s)
    console.log(s)
    onChange(s)
  }

  return (
    <>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <Avatar src={avatar} size="lg" />
        </Col>
      </Row>
      <Row h="center" mb={2}>
        <Col cw={'auto'}>
          <Button
            size="small"
            onClick={(event) => fileUploadClick(event)}
            variant="contained"
            color="default"
            component={'span'}>
            <CloudUploadIcon className="mr-2" />
            Upload photo
          </Button>
          <input
            accept="image/*"
            style={{ display: 'none' }}
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
