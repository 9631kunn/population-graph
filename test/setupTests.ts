import dotenv from 'dotenv'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
dotenv.config({ path: '.env.local' })
