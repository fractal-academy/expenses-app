import CategoryForm from 'domains/Category/components/form/CategoryForm.template'
import { COLORS } from 'app/constants'
const { COLOR_VALUE } = COLORS

const metadata = {
  title: 'domains/Category/components/form/CategoryForm',
  component: CategoryForm,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: ['nameCategory', 'budgetLimit', 'color']
      }
    }
  }
}
export default metadata

const Template = (args) => <CategoryForm {...args} />

export const CategoryFormFormStory = Template.bind({})

CategoryFormFormStory.args = {
  formData: {
    nameCategory: 'Other',
    budgetLimit: '1000',
    color: COLOR_VALUE[0].name
  },
  show: ['nameCategory', 'budgetLimit', 'color']
}
