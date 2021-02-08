import PropTypes from 'prop-types'
import { Row, Container, Col, Box } from '@qonsoll/react-design'
import { Typography, IconButton, Paper } from '@material-ui/core'
import { MoreHorizOutlined, Edit, Delete } from '@material-ui/icons'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { ProgressBar } from 'app/components/Lib'
import { useStyles } from './CategoryAdavncedView.style'
import { CategoryCombined } from 'domains/Category/components/combined/CategoryCombined'
import { DropdownItem, Dropdown } from 'app/components/Lib/Dropdown'

const DropdownList = (
  <>
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
  </>
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
  return (
    <Container mb={3}>
      <Row>
        <Col>
          <Paper
            elevation={3}
            className={classes.root}
            style={{ overflow: 'hidden' }}>
            {/* Row colorBox */}
            <Row height="100%" pr="0.25rem" pl="0rem">
              <Col cw="auto" px="0">
                <Box width="0.35rem" height="100%" background={colorCategory} />
              </Col>
              <Col>
                {/* Row with nameCategory and buttonEdit*/}
                <Row h="between" v="center" mb={2}>
                  <Col cw="auto">
                    <Typography>{nameCategory}</Typography>
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
                {/*Row with Available balance*/}
                <Row h="between" v="center" mb={2}>
                  <Col cw="auto">
                    <Typography variant="body2">Available Balance</Typography>
                  </Col>
                  <Col cw="auto">
                    <Box display="flex">
                      <Typography variant="body2">
                        {availableBalance}
                      </Typography>
                      <CurrencySimpleView variant="body2" value={currency} />
                    </Box>
                  </Col>
                </Row>
                {/* Row with ProgressBar*/}
                <Row mb={2}>
                  <Col sw="12">
                    <ProgressBar value={valueForProgressBar} />
                  </Col>
                </Row>
                {/*Row with Spent and BudgetValue*/}
                <Row h="between">
                  <Col cw="auto">
                    <Box display="flex">
                      <Typography component={Box} pr={1} variant="body2">
                        Spent
                      </Typography>
                      <Typography variant="body2">{spent}</Typography>
                      <CurrencySimpleView variant="body2" value={currency} />
                    </Box>
                  </Col>
                  <Col cw="auto">
                    <Box display="flex">
                      <Typography component={Box} pr={1} variant="body2">
                        Budget
                      </Typography>
                      <Typography variant="body2">{budget}</Typography>
                      <CurrencySimpleView variant="body2" value={currency} />
                    </Box>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
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
