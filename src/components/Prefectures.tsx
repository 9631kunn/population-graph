import Checkbox from './Checkbox'
import styled from 'styled-components'
import { ResponsePrefectures } from '../models/Api'

const Wrap = styled.ul`
  background: #aaa;
`

const Prefectures = (props: ResponsePrefectures): JSX.Element => {
  const prefectures = props.result

  return (
    <Wrap>
      <li>
        {prefectures.map((pref) => (
          <Checkbox key={pref.prefCode} pref={pref} />
        ))}
      </li>
    </Wrap>
  )
}

export default Prefectures
