import { useState } from 'react'
import {
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
import { AvatarUploader } from 'components/Lib/Avatar'
import { PropTypes } from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { RoleSingleSelect } from 'app/domains/Role/components/select'
import { Row, Col, Box } from '@qonsoll/react-design'
import moment from 'moment'

const MemberAdvancedForm = (props) => {
  const { handleSubmit, control, register, errors } = useForm({
    defaultValues: { ...props }
  })

  const [dateInSeconds, setDateInSeconds] = useState(
    props.dateInSeconds ? props.dateInSeconds : 946677600000
  )

  const onSubmit = (data) => {
    data.dateInSeconds = dateInSeconds
  }

  const handleDateChange = (event) => {
    setDateInSeconds(new Date(event).getTime())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Row h="center">
          <Col cw="auto">
            <FormControl>
              <Controller
                control={control}
                name="avatarUrl"
                render={({ onChange, value }) => (
                  <AvatarUploader value={value} onChange={onChange} />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col cw={[12, 6]} h="center">
            <Box>
              <TextField
                fullWidth
                label="Name"
                name="name"
                error={!!errors.name}
                helperText={errors.name?.message ? errors.name.message : ' '}
                inputRef={register({
                  pattern: {
                    value: new RegExp('^[a-zA-Z]+$'),
                    message: 'Enter a valid name'
                  },
                  required: 'Enter name'
                })}
              />
            </Box>
          </Col>
          <Col cw={[12, 6]}>
            <Box>
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
          </Col>
        </Row>
        <Row h="center">
          <Col cw={'auto'}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
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
          </Col>
        </Row>
        <Row mb={2}>
          <Col cw={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                name="date"
                format="dd/MM/yyyy"
                inputValue={moment(dateInSeconds).format('DD/MM/YYYY')}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </Col>
        </Row>
        <Row mb={2}>
          <Col cw={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              error={!!errors.email}
              helperText={errors.email?.message ? errors.email.message : ' '}
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
          </Col>
        </Row>
        <Row mb={2}>
          <Col cw={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              error={!!errors.phone}
              helperText={errors.phone?.message ? errors.phone.message : ' '}
              inputRef={register({
                required: 'Enter phone'
              })}
            />
          </Col>
        </Row>
        <Row h="around" mb={2}>
          <Col cw={'auto'}>
            <Button variant="contained">Delete</Button>
          </Col>
          <Col cw={'auto'}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </FormControl>
    </form>
  )
}
MemberAdvancedForm.propTypes = {}

export default MemberAdvancedForm
