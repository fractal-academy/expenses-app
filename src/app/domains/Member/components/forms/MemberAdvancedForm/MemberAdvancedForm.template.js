import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { AvatarUploader } from 'components/Lib'
import { RoleSingleSelect } from 'domains/Role/components/select'
import { ROUTES_PATHS } from 'app/constants'

const config = [
  {
    name: 'avatarURL',
    Component: AvatarUploader
  },
  {
    label: 'Role',
    name: 'role',
    Component: RoleSingleSelect
  },
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
    rules: {
      required: 'Enter your name',
      pattern: {
        value: 'word',
        message: 'Enter only your name'
      }
    }
  },
  {
    type: 'text',
    label: 'Surname',
    name: 'surname',
    placeholder: 'Enter your surname',
    rules: {
      required: 'Enter your surname',
      pattern: {
        value: 'word',
        message: 'Enter only your surname'
      }
    }
  },
  {
    type: 'date',
    label: 'Birthday',
    name: 'dateInSeconds',
    placeholder: 'Enter your birthday',
    rules: {
      required: 'Enter your birthday'
    }
  },
  {
    type: 'text',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    rules: {
      required: 'Enter your email',
      pattern: {
        value: 'email',
        message: 'Enter example@senseteq.io'
      }
    }
  },
  {
    type: 'phone',
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your Phone',
    rules: {
      pattern: {
        value: 'phone',
        message: 'Enter correct phone number'
      }
    }
  }
]

const MemberAdvancedForm = (props) => {
  const history = useHistory()
  const back = () => history.push(ROUTES_PATHS.MEMBER_SHOW)

  const {
    formData,
    show,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps
  } = props

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      defaultValues={formData}
      {...formProps}>
      <FormGenerator config={config} show={show} />
      <FormButtons
        Button={Button}
        visibleCancel={true}
        onClickCancel={back}
        {...buttonProps}
      />
    </Form>
  )
}

MemberAdvancedForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default MemberAdvancedForm
