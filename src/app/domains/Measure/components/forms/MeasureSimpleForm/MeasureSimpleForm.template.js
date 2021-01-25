import { TextField } from '@material-ui/core'

const MeasureSimpleForm = (props) => {
  const { formContext } = props
  const onSubmit = ({ measure }) => {
    console.log(measure)
  }

  return (
    <form onSubmit={formContext.handleSubmit(onSubmit)}>
      <TextField
        autoFocus
        margin="dense"
        id="measure"
        name="measure"
        label="measure"
        inputRef={formContext.register}
        fullWidth
      />
    </form>
  )
}

MeasureSimpleForm.propTypes = {}

export default MeasureSimpleForm
