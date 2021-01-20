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
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import styles from './MemberAdvancedForm.styles'

const useStyles = makeStyles(styles)

const MemberAdvancedForm = (props) => {
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const [role, setRole] = useState(props.role)
  const [date, setDate] = useState(props.date)
  console.log(role)
  const onSubmit = (data) => {
    console.log(data)
  }
  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
    console.log(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="container">
        <Box className="row" textAlign="center" justifyContent="center">
          <Box className="col-auto  mb-2">
            <Avatar size="md" src={props.avatar}></Avatar>
          </Box>
          <Box className="col-12 mb-2">
            <TextField
              value={props.name}
              id="memberName"
              name="memberName"
              label="name"
              required
              inputRef={register}
            />
          </Box>
          <Box className="col-12 mb-2">
            <TextField
              value={props.surname}
              id="memberSurname"
              name="memberSurname"
              label="surname"
              required
              inputRef={register}
            />
          </Box>
          <Box className="col-12 mb-2">
            <FormControl>
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
              <DatePicker value={date} onChange={() => handleDateChange()} />
            </MuiPickersUtilsProvider>
          </Box>
          <Box className="col-12 mb-2">
            <TextField
              value={props.email}
              id="memberEmail"
              name="memberEmail"
              label="email"
              required
              inputRef={register}
            />
          </Box>
          <Box className="col-12 mb-2">
            <TextField
              value={props.phone}
              id="memberPhone"
              name="memberPhone"
              label="phone"
              required
              inputRef={register}
            />
          </Box>
          <Box className="col-12 mb-2">
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
