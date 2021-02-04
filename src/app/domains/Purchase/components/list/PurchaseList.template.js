import { List } from '@material-ui/core'
import { Box } from '@qonsoll/react-design'
import { PurchaseAdvancedView } from '../views'

const PURCHASED = [
  {
    userAvatar: 'https://image.flaticon.com/icons/png/512/1134/1134769.png',
    prod: 'egg',
    quantity: '5 pieces',
    user: 'Sasha',
    price: '2$'
  },
  {
    userAvatar: 'https://cdn4.iconfinder.com/data/icons/amojiz-2/65/27-512.png',
    prod:
      'Видео предоставляет прекрасную возможность подтвердить свою точку зрения',
    quantity: '3 pieces',
    user: 'Timberlake',
    price: '1300$'
  },
  {
    userAvatar: 'https://vectorified.com/images/funny-profile-icon-17.jpg',
    prod: 'bread',
    quantity: '1 loaf',
    user: 'Jon',
    price: '1.75$'
  },
  {
    userAvatar: 'https://image.flaticon.com/icons/png/512/1134/1134769.png',
    prod: 'Например, вы можете добавить подходящую ',
    quantity: '500 kg',
    user: 'Tom',
    price: 'TFB'
  }
]
//TODO delete mock data
const PurchaseList = () => {
  return (
    <List>
      {PURCHASED.map((item) => {
        return (
          <Box mb={3}>
            <PurchaseAdvancedView item={item} />
          </Box>
        )
      })}
    </List>
  )
}

export default PurchaseList
