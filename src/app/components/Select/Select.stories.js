import Select from './Select.template'
import { PRIORITY } from 'app/constants'
import MenuItem from '@material-ui/core/MenuItem'

const { PRIORITY_VALUE } = PRIORITY
const metadata = {
  title: 'components/Select',
  component: Select
}
export default metadata

const Template = (args) => (
  <Select {...args}>
    {(item) => (
      <MenuItem value={item} key={item}>
        {item}
      </MenuItem>
    )}
  </Select>
)

export const SelectStory = Template.bind({})

SelectStory.args = {
  value: PRIORITY_VALUE[0],
  data: PRIORITY_VALUE
}
