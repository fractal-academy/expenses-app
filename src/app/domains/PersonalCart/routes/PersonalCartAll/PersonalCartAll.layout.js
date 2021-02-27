import { FabButton } from 'app/components/Lib'
import { PersonalCartTable } from 'app/domains/PersonalCart/components/table'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'

const PersonalCartAll = () => {
  const history = useHistory()
  const handleClickOpen = () => {
    history.push(ROUTES_PATHS.PURCHASE_CREATE)
  }
  return (
    <>
      <PersonalCartTable />
      <FabButton onClick={handleClickOpen} />
    </>
  )
}

PersonalCartAll.propTypes = {}

export default PersonalCartAll
