import { Layout } from 'components'

const withLayout = (config) => (Component) => (props) => {
  return (
    <Layout {...config}>
      <Component {...props} />
    </Layout>
  )
}

export default withLayout
