import { useState, useRef } from 'react'
import {
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  FormHelperText
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DateFnsUtils from '@date-io/date-fns'
import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { RoleSingleSelect } from 'app/domains/Role/components/select'

import { expensesProject } from '../../../../../constants'

const MemberAdvancedForm = (props) => {
  const { handleSubmit, setValue, control, register, errors } = useForm({
    defaultValues: { ...props }
  })
  const fileUpload = useRef(null)

  const [date, setDate] = useState(props.date ? props.date : '1609855440000')
  const [avatar, setAvatar] = useState(props.avatar)

  const onSubmit = (data) => {
    data.avatar = avatar
    setValue('date', new Date(date).getTime())
    console.log(data)
  }

  const handleDateChange = (event) => {
    setDate(new Date(event).getTime())
  }
  const fileUploadClick = (event) => {
    fileUpload.current.click()
  }
  const changeAvatar = async () => {
    var file = fileUpload.current.files[0]
    var storageRef = expensesProject.storage().ref()
    var fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setAvatar(await fileRef.getDownloadURL())
  }

  return (
    <Box className="container-fluid">
      <Box className="row" justifyContent="center">
        <Box className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Box className="container-sm">
                <Box className="row">
                  <Box
                    className="col-12 col-sm-12 mb-2"
                    justifyContent="center"
                    display="flex">
                    <Avatar size="lg" src={avatar}></Avatar>
                  </Box>
                  <Box
                    className="col-12 col-sm-12 mb-2"
                    justifyContent="center"
                    display="flex">
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
                  </Box>

                  <Box className="col-12 col-md mb-2">
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      error={!!errors.name}
                      helperText={
                        errors.name?.message ? errors.name.message : ' '
                      }
                      inputRef={register({
                        pattern: {
                          value: new RegExp('^[a-zA-Z]+$'),
                          message: 'Enter a valid name'
                        },
                        required: 'Enter name'
                      })}
                    />
                  </Box>
                  <Box className="col-12 col-md mb-2">
                    <TextField
                      fullWidth
                      label="Surname"
                      name="surname"
                      error={!!errors.surname}
                      helperText={
                        errors.surname?.message ? errors.surname.message : ' '
                      }
                      inputRef={register({
                        pattern: {
                          value: new RegExp('^[A-Za-z]+$'),
                          message: 'Enter a valid surname'
                        },
                        required: 'Enter surname'
                      })}
                    />
                  </Box>
                  <Box
                    className="col-12 mb-2"
                    display="flex"
                    justifyContent="center">
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Controller
                        rules={{ required: 'Enter a role' }}
                        control={control}
                        name="role"
                        render={({ onChange, value }) => (
                          <RoleSingleSelect value={value} onChange={onChange} />
                        )}
                      />
                      <FormHelperText error>
                        {errors.role ? errors.role.message : ' '}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box className="col-12 mb-2">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        name="date"
                        format="dd/MM/yyyy"
                        onChange={handleDateChange}
                        inputValue={
                          new Date(+date).getUTCDate() +
                          1 +
                          '/' +
                          (new Date(+date).getUTCMonth() + 1) +
                          '/' +
                          new Date(+date).getUTCFullYear()
                        }
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Box>
                  <Box className="col-12 mb-2">
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      error={!!errors.email}
                      helperText={
                        errors.email?.message ? errors.email.message : ' '
                      }
                      inputRef={register({
                        pattern: {
                          value: new RegExp(
                            '^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?gmail.com$'
                          ),
                          message: 'Enter a valid email address'
                        },
                        required: 'Enter email'
                      })}
                    />
                  </Box>
                  <Box className="col-12 mb-4">
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      error={!!errors.phone}
                      helperText={
                        errors.phone?.message ? errors.phone.message : ' '
                      }
                      inputRef={register({
                        required: 'Enter phone'
                      })}
                    />
                  </Box>
                  <Box
                    className="col-12 mb-2"
                    display="flex"
                    justifyContent="space-around">
                    <Button variant="contained">Delete</Button>
                    <Button variant="contained" color="primary" type="submit">
                      Save
                    </Button>
                  </Box>
                </Box>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

MemberAdvancedForm.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  role: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  date: PropTypes.string
}
MemberAdvancedForm.defaultProps = {}

export default MemberAdvancedForm
