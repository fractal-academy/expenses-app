import Modal from './Modal.template'

const metadata = {
  title: 'components/Lib/Modal',
  component: Modal,
  argTypes: {
    buttonSubmitProps: {
      description:
        'Must contain onClick or "type: submit" and "form: formId" for Form,' +
        ' can get all the Material-UI Button props and custom property "text" to set Button text'
    },
    buttonCancelProps: {
      description:
        'Must contain onClick, can get all the Material-UI Button props and custom property "text" to set Button text'
    },
    open: {
      description:
        'Contain boolean state of Modal window if open - true, else - false, default: false'
    },
    children: {
      description: 'Can contain any node'
    },
    title: {
      description: 'Text for modal title'
    }
  }
}
export default metadata

const Template = (args) => <Modal {...args} />

export const ModalStory = Template.bind({})

Modal.args = {}
