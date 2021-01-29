import { Layout } from 'app/components'

const withLayout = (config) => (Component) => (props) => (
  <Layout {...config}>{Component && <Component {...props} />}</Layout>
)

export default withLayout
