import Checkbox from './Checkbox'

import styles from '../styles/Home.module.css'

import { ResponsePrefectures } from '../models/Api'

const Prefectures = (props: ResponsePrefectures): JSX.Element => {
  const prefectures = props.result

  return (
    <ul className={styles.prefectures}>
      <li>
        {prefectures.map((pref) => (
          <Checkbox key={pref.prefCode} pref={pref} />
        ))}
      </li>
    </ul>
  )
}

export default Prefectures
