import Checkbox from './Checkbox'
import { ResponsePrefectures } from '../models/Api'
import { Wrap } from '../styles/components/prefectures'

const Prefectures = (props: ResponsePrefectures): JSX.Element => {
  const prefectures = props.result

  return (
    <Wrap>
      {prefectures.map((pref) => (
        <li key={pref.prefCode}>
          <Checkbox pref={pref} />
        </li>
      ))}
    </Wrap>
  )
}

export default Prefectures
