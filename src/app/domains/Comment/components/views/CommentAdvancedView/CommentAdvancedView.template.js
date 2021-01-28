import { useStyles } from './CommentAdvancedView.style'
import { Paper } from '@material-ui/core'
import { Box, Row, Col } from '@qonsoll/react-design'

const CommentAdvancedView = (props) => {
  const classes = useStyles()

  return (
    <Box>
      <Row>
        <Col>
          <Box m={2}>
            <Paper elevation={3} square={true}>
              qweqweqweqweqw qweqweqwe qweqweq Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Blanditiis dolore doloremque,
              doloribus ea eaque earum eveniet in iste iusto laudantium
              necessitatibus nesciunt officiis quasi repellendus rerum soluta,
              tempore ullam vel?
            </Paper>
          </Box>
        </Col>
      </Row>
    </Box>
  )
}

CommentAdvancedView.propTypes = {}
CommentAdvancedView.defaultProps = {}

export default CommentAdvancedView
