import { useRecoilState } from 'recoil'
import { ResponsePrefecture } from '../models/Api'
import { checkedPrefecturesState } from '../atoms/checkedPrefectures'
import { getPopulation } from '../lib/getData'
import { prefecturePopulationState } from '../atoms/prefecturePopulation'

const Checkbox = ({ pref }: { pref: ResponsePrefecture }): JSX.Element => {
  const { prefCode, prefName } = pref

  // チェックの入った都道府県IDの配列
  const [checkedPrefectures, setCheckedPrefectures] = useRecoilState(
    checkedPrefecturesState
  )
  // チェックの入った都道府県別人口の配列
  const [prefecturePopulation, setPrefecturePopulation] = useRecoilState(
    prefecturePopulationState
  )

  const handleChange = async () => {
    // 既にチェック入ってたらStateから削除
    if (checkedPrefectures.includes(prefCode)) {
      const copyCheckedPrefectures = [...checkedPrefectures].filter(
        (c) => c !== prefCode
      )
      const copyPrefecturePopulation = [...prefecturePopulation].filter(
        (p) => p.name !== prefName
      )
      setCheckedPrefectures(copyCheckedPrefectures)
      setPrefecturePopulation(copyPrefecturePopulation)
      return
    }

    // チェックの入った都道府県リスト
    setCheckedPrefectures([...checkedPrefectures, prefCode])

    // APIから渡ってきた情報をHighchartに合わせて整形
    const data = await getPopulation(prefCode)
    const population = data.result.data[0].data
    const populationArray: number[] = population.map((p) => p.value)
    setPrefecturePopulation([
      ...prefecturePopulation,
      {
        name: prefName,
        data: populationArray
      }
    ])
  }

  return (
    <label>
      <input type="checkbox" onClick={() => handleChange()} />
      {pref.prefName}
    </label>
  )
}

export default Checkbox
