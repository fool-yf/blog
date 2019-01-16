import withSecretToLife from './withSecreToLife'
import DisplayTheSecret from './DisplayTheSecret'

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;