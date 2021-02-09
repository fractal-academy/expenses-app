import PropTypes from 'prop-types'
import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper, Divider } from '@material-ui/core'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { ProgressBar } from 'app/components/Lib'
import { useStyles } from './CategoryAdavncedView.style'
import { CategoryCombined } from 'domains/Category/components/combined/CategoryCombined'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'
import formatCurrency from 'format-currency'

const DropdownList = (
  <div>
    <CategoryCombined title="Edit category" typeModalEdit>
      <DropdownItem>
        <Box mr={2}>
          <Edit />
        </Box>
        Edit
      </DropdownItem>
    </CategoryCombined>
    <DropdownItem danger>
      <Box mr={2}>
        <Delete />
      </Box>
      Delete
    </DropdownItem>
  </div>
)

const CategoryAdvancedView = (props) => {
  const classes = useStyles()
  const {
    nameCategory,
    colorCategory,
    currency,
    spent,
    budget,
    valueForProgressBar
  } = props

  const availableBalance = budget - spent

  const formattedAvailableBalance = formatCurrency(availableBalance)

  const formattedSpent = formatCurrency(spent)

  return (
    <>
      <Container mb={3} className={classes.paper}>
        <Row>
          <Col>
            <Paper>
              <Box className={classes.border} background={colorCategory} />
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
                      <Dropdown overlay={DropdownList}>
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
                      <Divider />
                    </Col>
                  </Row>
                  {/*Row with spent and left money*/}
                  <Row h="between" mb={1}>
                    <Col cw="auto" display="flex">
                      <CurrencySimpleView
                        variant="body1"
                        value={currency}
                        className={
                          budget - spent > 50
                            ? `${classes.blue}`
                            : `${classes.red}`
                        }
                      />
                      <Typography
                        variant="body1"
                        className={
                          budget - spent > 50
                            ? `${classes.blue}`
                            : `${classes.red}`
                        }>
                        {formattedAvailableBalance}
                      </Typography>
                    </Col>

                    <Col cw="auto" display="flex">
                      <CurrencySimpleView
                        color="textSecondary"
                        variant="body1"
                        value={currency}
                        className={budget - spent < 50 && `${classes.red}`}
                      />
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={budget - spent < 50 && `${classes.red}`}>
                        {formattedSpent}
                      </Typography>
                    </Col>
                  </Row>

                  {/* Row with ProgressBar*/}
                  <Row mb={2}>
                    <Col sw="12">
                      <ProgressBar value={valueForProgressBar} />
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
  currency: PropTypes.string.isRequired,
  spent: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  valueForProgressBar: PropTypes.number.isRequired
}
CategoryAdvancedView.defaultProps = {
  nameCategory: 'Other',
  colorCategory: 'orange',
  availableBalance: '2500',
  spent: '7500',
  budget: '10000',
  currency: 'USD',
  valueForProgressBar: 50
}
export default CategoryAdvancedView
