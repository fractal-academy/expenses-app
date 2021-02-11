import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { AvatarUploader, LoadingButton } from 'app/components/Lib'
import { RoleSingleSelect } from 'domains/Role/components/select'
import { useMemo } from 'react'

const MemberAdvancedForm = (props) => {
  const {
    formData,
    show,
    hide,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps,
    onCancel,
    loading
  } = props

  let history = useHistory()

  //because AvatarUploader import as unde
  const config = useMemo(
    () => [
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
        name: 'firstName',
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
        name: 'birthday',
        props: { disableFuture: true },
        placeholder: 'Enter your birthday',
        rules: {
          required: 'Enter your birthday'
        }
      },
      {
        type: 'text',
        label: 'Email',
        name: 'email',
        inputProps: { inputProps: { readOnly: true } },
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
    ],
    []
  )
  const onClickCancel = (data) => {
    onCancel && onCancel(data)
    history.goBack()
  }

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      defaultValues={formData}
      {...formProps}>
      <FormGenerator config={config} show={show} hide={hide} />
      <FormButtons
        Button={LoadingButton}
        visibleCancel={true}
        onClickCancel={onClickCancel}
        buttonPropsSubmit={{ loading }}
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
  hide: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default MemberAdvancedForm
