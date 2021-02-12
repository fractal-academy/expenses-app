import { List } from '@material-ui/core'
import { Box } from '@qonsoll/react-design'
import { useHistory } from 'react-router-dom'
import { PurchaseAdvancedView } from '../../views'
import { ROUTES_PATHS } from 'app/constants'

const PURCHASED = [
  {
    userAvatar: 'https://image.flaticon.com/icons/png/512/1134/1134769.png',
    prod: 'Egg',
    quantity: '5 pieces',
    user: 'Sasha',
    price: '2$'
  },
  {
    userAvatar: 'https://cdn4.iconfinder.com/data/icons/amojiz-2/65/27-512.png',
    prod: 'Sugar',
    quantity: '3 pieces',
    user: 'Rostik',
    price: '1300$'
  },
  {
    userAvatar: 'https://vectorified.com/images/funny-profile-icon-17.jpg',
    prod: 'Bread',
    quantity: '1 loaf',
    user: 'Jon',
    price: '1.75$'
  },
  {
    userAvatar: 'https://image.flaticon.com/icons/png/512/1134/1134769.png',
    prod: 'Kitchen gun',
    quantity: 'TFB',
    user: 'Tom',
    price: '100$'
  }
]
//TODO delete mock data
const PurchaseList = () => {
  const history = useHistory()
  return (
    <List>
      {PURCHASED.map((item) => {
        return (
          <Box
            mb={3}
            onClick={() =>
              history.push(`${ROUTES_PATHS.PURCHASE_ALL}/{purchaseId}`)
            }>
            <PurchaseAdvancedView item={item} />
          </Box>
        )
      })}
    </List>
  )
}

export default PurchaseList
