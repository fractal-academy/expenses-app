import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons,
  useForm
} from 'mui-form-generator-fractal-band-2'
import { AvatarUploader } from 'components/Lib/Avatar'
import { RoleSingleSelect } from 'app/domains/Role/components/select'

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
      required: 'true',
      pattern: {
        value: 'text'
      }
    }
  },
  {
    type: 'text',
    label: 'Surname',
    name: 'surname',
    placeholder: 'Enter your surname',
    rules: {
      required: 'true',
      pattern: {
        value: 'text'
      }
    }
  },
  {
    type: 'date',
    label: 'Birthday',
    name: 'dateInSeconds',
    placeholder: 'Enter your birthday',
    rules: {
      required: 'true'
    }
  },
  {
    type: 'text',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    rules: {
      required: 'true',
      pattern: {
        value: 'email',
        domain: 'senseteq.io',
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
  const { formData, show, onSubmit, onSubmitFail } = props
  const form = useForm({
    defaultValues: { ...formData }
  })
  return (
    <Form form={form} onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} visibleCancel={false} />
    </Form>
  )
}

MemberAdvancedForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array
}

export default MemberAdvancedForm
