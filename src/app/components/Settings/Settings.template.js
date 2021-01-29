import { Link } from 'react-router-dom'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'

const SETTINGS_MENU = [
  { title: 'Members', path: ROUTES_PATHS.MEMBERS_ALL },
  { title: 'Categories', path: ROUTES_PATHS.CATEGORIES_ALL },
  { title: 'Logs', path: ROUTES_PATHS.LOGS_ALL },
  { title: 'Products list', path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL },
  { title: 'Purchase', path: ROUTES_PATHS.PURCHASE_ALL }
]

const Settings = (props) => {
  return (
    <Box>
      {SETTINGS_MENU.map(({ path, title }) => (
        <Box py={2} key={path}>
          <Link to={path}>{title}</Link>
        </Box>
      ))}
    </Box>
  )
}

Settings.propTypes = {}

export default Settings
