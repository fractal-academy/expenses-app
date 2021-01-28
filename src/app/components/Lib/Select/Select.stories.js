import MenuItem from '@material-ui/core/MenuItem'
import Select from './Select.template'
import { PRIORITIES } from 'app/constants'

const metadata = {
  title: 'components/Lib/Select',
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
  value: PRIORITIES[0],
  data: PRIORITIES
}
