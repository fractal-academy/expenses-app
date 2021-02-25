import PropTypes from 'prop-types'
import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper, Divider } from '@material-ui/core'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { ProgressBar } from 'app/components/Lib'
import { useStyles } from './CategoryAdavncedView.style'
import { CategoryCombined } from 'domains/Category/components/combined/CategoryCombined'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'
import { deleteData } from 'app/services/Firestore'
import formatCurrency from 'format-currency'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext'
import COLOR from 'app/constants/colors'

const CategoryAdvancedView = (props) => {
  // INTERFACE
  const { id, nameCategory, colorCategory, currency, spent, budget } = props

  // CUSTOM HOOKS
  const classes = useStyles()
  const user = useSession()

  const deleteCategory = () => {
    Logger('Delete Category', `Category ${nameCategory} was deleted`, user)
    deleteData('categories', id)
  }
  // COMPUTED PROPERTIES
  const availableBalance = budget - spent
  const valueForProgressBar = 100 - (availableBalance * 100) / budget
  const formattedAvailableBalance = formatCurrency(availableBalance)
  const formattedSpent = formatCurrency(spent)
  const progressbarClasses =
    valueForProgressBar >= 100 ? `${classes.red}` : `${classes.blue}`
  const availableMoneyClass = valueForProgressBar >= 100 && classes.red

  // DROPDOWN OVERLAY ELEMENT
  const DropdownList = (
    <div>
      <CategoryCombined
        title="Edit category"
        showName={false}
        typeModalEdit
        categoryId={id}
        budget={budget}>
        <DropdownItem>
          <Box mr={2}>
            <Edit />
          </Box>
          Edit
        </DropdownItem>
      </CategoryCombined>
      <DropdownItem danger onClick={deleteCategory}>
        <Box mr={2}>
          <Delete />
        </Box>
        Delete
      </DropdownItem>
    </div>
  )

  // TEMPLATE
  return (
    <>
      <Container my={2} className={classes.paper}>
        <Row>
          <Col>
            <Paper>
              <Box
                className={classes.border}
                background={
                  COLOR[colorCategory.replace(' ', '_').toUpperCase()].color
                }
              />
              {/* Row colorBox */}
              <Row height="100%" pr="0.25rem" pl="0rem">
                <Col p={2}>
                  {/* Row with nameCategory and buttonEdit*/}
                  <Row h="between" v="center" mb={2}>
                    <Col cw="auto">
                      <Typography variant="h6" className={classes.bold}>
                        {nameCategory}
                      </Typography>
                    </Col>
                    <Col cw="auto">
                      <Dropdown overlay={DropdownList} id={id}>
                        <IconButton
                          size="small"
                          color="primary"
                          aria-label="upload picture"
                          component="span">
                          <MoreHorizOutlined />
                        </IconButton>
                      </Dropdown>
                    </Col>
                  </Row>
                  {/*Row with divider*/}
                  <Row mb={3}>
                    <Col cw={12}>
                      <Divider className={classes.divColor} />
                    </Col>
                  </Row>
                  {/*Row with spent and left money*/}
                  <Row h="between" mb={1}>
                    <Col cw="auto" display="flex">
                      <CurrencySimpleView
                        variant="body1"
                        value={currency}
                        className={progressbarClasses}
                      />
                      <Typography
                        variant="body1"
                        className={progressbarClasses}>
                        {formattedSpent}
                      </Typography>
                    </Col>

                    <Col cw="auto" display="flex">
                      <CurrencySimpleView
                        color="textSecondary"
                        variant="body1"
                        value={currency}
                        className={availableMoneyClass}
                      />
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={availableMoneyClass}>
                        {formattedAvailableBalance}
                      </Typography>
                    </Col>
                  </Row>

                  {/* Row with ProgressBar*/}
                  <Row mb={2}>
                    <Col sw="12">
                      <ProgressBar
                        value={valueForProgressBar}
                        className={availableMoneyClass}
                      />
                    </Col>
                  </Row>
                  <Row h="between">
                    <Col cw="auto">
                      <Typography variant="body2" color="textSecondary">
                        Spent
                      </Typography>
                    </Col>
                    <Col cw="auto">
                      <Typography variant="body2" color="textSecondary">
                        Available
                      </Typography>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
      </Container>
    </>
  )
}
CategoryAdvancedView.propTypes = {
  nameCategory: PropTypes.string.isRequired,
  colorCategory: PropTypes.string.isRequired,
  currency: PropTypes.string,
  spent: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  valueForProgressBar: PropTypes.number
}

export default CategoryAdvancedView
