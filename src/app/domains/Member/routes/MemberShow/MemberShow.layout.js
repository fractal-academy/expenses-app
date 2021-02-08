import { MemberAdvancedView } from '../../components/views'
import { Row, Box } from '@qonsoll/react-design'
import { useStyles } from './MemberShow.styles'

const tempData = {
  avatarUrl: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'admin',
  email: 'olenashevchuk0@gmail.com',
  phone: '+3809457152',
  date: 1455753600000
}

const MemberShow = (props) => {
  const classes = useStyles()
  return (
    <>
      <img src="/logo.jpg" alt="Logo" className={classes.headerImage} />
      <Box position="relative" bottom="50px">
        <MemberAdvancedView
          avatarUrl={tempData.avatarUrl}
          name={tempData.name}
          surname={tempData.surname}
          role={tempData.role}
          email={tempData.email}
          phone={tempData.phone}
          birthday={tempData.date}
        />
      </Box>
    </>
  )
}

MemberShow.propTypes = {}
MemberShow.defaultProps = {}

export default MemberShow
