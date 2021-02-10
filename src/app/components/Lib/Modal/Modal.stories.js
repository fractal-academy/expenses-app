import Modal from './Modal.template'

const metadata = {
  title: 'components/Lib/Modal',
  component: Modal,
  argTypes: {
    open: {
      description:
        'Contain boolean state of Modal window if open - true, else - false, default: false'
    },
    dialogProps: {
      description: 'Can get all the Material-UI Dialog props'
    },
    title: {
      description: 'Text for modal title'
    },
    titleTypographyProps: {
      description: 'Can get all the Material-UI Typography props'
    },
    children: {
      description: 'Can contain any node'
    },
    buttonSubmitProps: {
      description: `Must include onClick or type: 'submit' and form: 'formId' for Form,
        can get all the Material-UI Button props and custom property 'text' to set Button text`
    },
    buttonCancelProps: {
      description:
        'Must contain onClick, can get all the Material-UI Button props and custom property "text" to set Button text'
    }
  }
}
export default metadata

const Template = (args) => <Modal {...args} />

export const ModalStory = Template.bind({})

ModalStory.args = {}
