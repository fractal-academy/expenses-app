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
import { Row, Col } from '@qonsoll/react-design'

const MemberAdvancedForm = (props) => {
  const { handleSubmit, control, register, errors } = useForm({
    defaultValues: { ...props }
  })

  const [date, setDate] = useState(props.date ? props.date : '1609855440000')

  const onSubmit = (data) => {
    data.date = date
    console.log(data)
  }

  const handleDateChange = (event) => {
    setDate(new Date(event).getTime())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Row h="center">
          <Col cw="auto">
            <FormControl>
              <Controller
                control={control}
                name="avatar"
                render={({ onChange, value }) => (
                  <AvatarUploader value={value} onChange={onChange} />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col cw={[12, 6]} h="center">
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
          </Col>
          <Col cw={[12, 6]}>
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
MemberAdvancedForm.defaultProps = {}

export default MemberAdvancedForm
