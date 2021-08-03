import { useRecoilState } from 'recoil'
import { ResponsePrefecture } from '../models/Api'
import { loadingState } from '../atoms/loading'
import { checkedPrefecturesState } from '../atoms/checkedPrefectures'
import { prefecturePopulationState } from '../atoms/prefecturePopulation'
import { getPopulation } from '../lib/getData'
import { Wrap } from '../styles/components/checkbox'

const Checkbox = ({ pref }: { pref: ResponsePrefecture }): JSX.Element => {
  const { prefCode, prefName } = pref

  const [loading, setLoading] = useRecoilState(loadingState)

  // チェックの入った都道府県IDの配列
  const [checkedPrefectures, setCheckedPrefectures] = useRecoilState(
    checkedPrefecturesState
  )
  // チェックの入った都道府県別人口の配列
  const [prefecturePopulation, setPrefecturePopulation] = useRecoilState(
    prefecturePopulationState
  )

  const handleChange = async () => {
    setLoading(true)
    // 既にチェック入ってたらStateから削除
    if (checkedPrefectures.includes(prefCode)) {
      // チェック入った都道府県
      const copyCheckedPrefectures = [...checkedPrefectures].filter(
        (c) => c !== prefCode
      )
      setCheckedPrefectures(copyCheckedPrefectures)
      // チェック入った都道府県の人口データ
      const copyPrefecturePopulation = [...prefecturePopulation].filter(
        (p) => p.name !== prefName
      )
      setPrefecturePopulation(copyPrefecturePopulation)
      setLoading(false)
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
    setLoading(false)
  }

  return (
    <Wrap>
      <input type="checkbox" onClick={() => handleChange()} />
      <span>{pref.prefName}</span>
    </Wrap>
  )
}

export default Checkbox
