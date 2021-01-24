import { useState } from 'react'
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
import DateFnsUtils from '@date-io/date-fns'
import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { RoleSingleSelect } from 'app/domains/Role/components/select'
import { makeStyles } from '@material-ui/core/styles'
import styles from './MemberAdvancedForm.styles'

const useStyles = makeStyles(styles)

const MemberAdvancedForm = (props) => {
  const { handleSubmit, setValue, control, register, errors } = useForm({
    defaultValues: { ...props }
  })

  const [date, setDate] = useState(props.date)
  const [avatar, setAvatar] = useState(props.avatar)

  const onSubmit = (data) => {
    data.avatar = avatar
    console.log(data)
  }

  const handleDateChange = (event) => {
    setDate(event)
    setValue('data', Date(date).getTime)
  }

  return (
    <Box className="container-fluid">
      <Box className="row" justifyContent="center">
        <Box className="col-12 col-md-6 col-lg-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Box className="container-sm">
                <Box className="row">
                  <Box
                    className="col-12 col-sm-12 mb-2"
                    justifyContent="center"
                    display="flex">
                    <Avatar size="md" src={props.avatar}></Avatar>
                  </Box>

                  <Box className="col-12 col-md mb-2">
                    <TextField
                      label="name"
                      name="Name"
                      fullWidth
                      error={!!errors.name}
                      helperText={
                        errors.name?.message ? errors.name.message : ' '
                      }
                      inputRef={register({
                        pattern: {
                          value: new RegExp('([a-zA-Z])+'),
                          message: 'Enter a valid email address'
                        },
                        required: 'Enter email'
                      })}
                      value={props.name}
                    />
                  </Box>
                  <Box className="col-12 col-md mb-2">
                    <TextField
                      label="surname"
                      name="Surname"
                      fullWidth
                      error={!!errors.surname}
                      helperText={
                        errors.surname?.message ? errors.surname.message : ' '
                      }
                      inputRef={register({
                        pattern: {
                          value: new RegExp('([a-zA-Z])+'),
                          message: 'Enter a valid surname'
                        },
                        required: 'Enter surname'
                      })}
                      value={props.name}
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
                        {errors.role ? errors.role.message : <> &nbsp;</>}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box className="col-12 mb-2">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        value={new Date(+date)}
                        name="date"
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        onChange={handleDateChange}
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
  date: PropTypes.instanceOf(Date)
}
MemberAdvancedForm.defaultProps = {}

export default MemberAdvancedForm
