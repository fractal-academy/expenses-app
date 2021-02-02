import { ListHOC } from 'app/components/HOCs/ListHOC/index'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { Box, Container } from '@qonsoll/react-design'

const tmpData = [
  {
    commentTime: new Date().getTime(),
    name: 'QQQQQQQQ',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: new Date().getTime(),
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: new Date().getTime(),
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 1612277461226,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  },
  {
    commentTime: 444444444,
    name: 'Aleksandr',
    surName: 'Golyk',
    text: 'Lorem lorem lorem'
  }
]

const CommentList = (props) => {
  return (
    <Container>
      <Box>
        <ListHOC collectionName="comments" mock={tmpData}>
          {(item) => (
            <CommentAdvancedView
              commentTime={item.commentTime}
              name={item.name}
              surName={item.surName}
              text={item.text}
            />
          )}
        </ListHOC>
      </Box>
    </Container>
  )
}

CommentList.propTypes = {}
CommentList.defaultProps = {}

export default CommentList
