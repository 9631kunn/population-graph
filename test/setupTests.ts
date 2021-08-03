import dotenv from 'dotenv'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() }) // JEST用
dotenv.config({ path: '.env.local' }) // テスト環境で環境変数を使うため
