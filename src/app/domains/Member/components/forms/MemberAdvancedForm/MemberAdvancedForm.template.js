import { useState } from 'react'
import {
  Box,
  TextField,
  Select,
  Button,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const MemberAdvancedForm = (props) => {
  const { register, handleSubmit, setValue } = useForm()
  const [role, setRole] = useState(props.role)
  const [date, setDate] = useState(props.date)
  const [avatar, setAvatar] = useState(props.avatar)

  const onSubmit = (data) => {
    data.date = Date.parse(date) / 1000
    data.avatar = avatar
    console.log(data)
  }
  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const handleDateChange = (event) => {
    setDate(event)
    setValue('data', event)
  }

  return (
    <Box className="container-fluid">
      <Box className="row" justifyContent="center">
        <Box className="col-12 col-md-6 col-lg-3">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    fullWidth
                    inputProps={{ pattern: '([a-zA-Z])+' }}
                    value={props.name}
                    id="memberName"
                    name="memberName"
                    label="name"
                    required
                    inputRef={register}
                  />
                </Box>
                <Box className="col-12 col-md mb-2">
                  <TextField
                    fullWidth
                    inputProps={{ pattern: '([a-zA-Z])+' }}
                    value={props.surname}
                    id="memberSurname"
                    name="memberSurname"
                    label="surname"
                    required
                    inputRef={register}
                  />
                </Box>
                <Box className="col-12 mb-2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      autoWidth
                      onChange={handleChange}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}>
                      <MenuItem value={'User'}>User</MenuItem>
                      <MenuItem value={'Admin'}>Admin</MenuItem>
                      <MenuItem value={'Observer'}>Observer</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="col-12 mb-2">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      value={date}
                      name="b"
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
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
                    inputProps={{
                      pattern:
                        '^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?gmail.com$'
                    }}
                    value={props.email}
                    id="memberEmail"
                    name="memberEmail"
                    label="email"
                    required
                    inputRef={register}
                  />
                </Box>
                <Box className="col-12 mb-4">
                  <TextField
                    fullWidth
                    type="number"
                    value={props.phone}
                    id="memberPhone"
                    name="memberPhone"
                    label="phone"
                    inputRef={register}
                  />
                </Box>
                <Box
                  className="col-12 mb-2"
                  display="flex"
                  justifyContent="space-around">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="small">
                    Delete
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small">
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
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
