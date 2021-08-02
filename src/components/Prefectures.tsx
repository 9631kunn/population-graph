import { ResponsePrefectures } from '../models/Api'
import styles from '../styles/Home.module.css'

const Prefectures = (props: ResponsePrefectures): JSX.Element => {
  const prefectures = props.result
  console.log(prefectures)

  return (
    <ul className={styles.prefectures}>
      <li></li>
    </ul>
  )
}

export default Prefectures
