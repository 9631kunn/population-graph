import { useRecoilState } from 'recoil'
import { ResponsePrefecture } from '../models/Api'
import { checkedPrefecturesState } from '../atoms/checkedPrefectures'

const Checkbox = ({ pref }: { pref: ResponsePrefecture }): JSX.Element => {
  const { prefCode } = pref

  const [checkedPrefectures, setCheckedPrefectures] = useRecoilState(
    checkedPrefecturesState
  )

  const handleChange = () => {
    setCheckedPrefectures([...checkedPrefectures, prefCode])
    console.log(checkedPrefectures)
  }

  return (
    <label>
      <input type="checkbox" onClick={() => handleChange()} />
      {pref.prefName}
    </label>
  )
}

export default Checkbox
