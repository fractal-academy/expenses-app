import { TextField } from '@material-ui/core'
import { PropTypes } from 'prop-types'

const MeasureSimpleForm = (props) => {
  const { formContext, formSubmit, textFieldProps } = props

  return (
    <form
      id="measure-form"
      onSubmit={
        formSubmit && formContext && formContext.handleSubmit(formSubmit)
      }>
      <TextField
        autoFocus
        name="measure"
        label="measure"
        inputRef={formContext && formContext.register}
        {...textFieldProps}
      />
    </form>
  )
}

MeasureSimpleForm.propTypes = {
  formContext: PropTypes.object.isRequired,
  formSubmit: PropTypes.func.isRequired,
  textFieldProps: PropTypes.object.isRequired
}

export default MeasureSimpleForm
