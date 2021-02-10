import { Paper, Typography } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import { Avatar } from 'app/components/Lib'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

const PurchaseAdvancedView = (props) => {
  const { item } = props

  return (
    <Paper>
      <Row>
        <Col cw="auto" v="center">
          <Avatar src={item.userAvatar} />
        </Col>
        <Col>
          <Row pt="1">
            <Col maxWidth="40vw">
              <Typography noWrap variant="subtitle1">
                {item.prod}
              </Typography>
            </Col>
            <Col v="center">
              <Typography variant="subtitle1" align="right">
                {item.price}
              </Typography>
            </Col>
          </Row>
          <Row py="1">
            <Col>
              <Typography variant="body2" color="textSecondary">
                {item.quantity}
              </Typography>
            </Col>
            <Col cw="auto">
              <Typography variant="body2" align="right" color="textSecondary">
                {item.user}
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    </Paper>
  )
}

PurchaseAdvancedView.propTypes = {
  item: PropTypes.object.isRequired
}

export default PurchaseAdvancedView
