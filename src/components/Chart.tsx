import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useRecoilState } from 'recoil'
import { prefecturePopulationState } from '../atoms/prefecturePopulation'
import { Wrap } from '../styles/components/chart'

const Chart = (): JSX.Element => {
  const [prefecturePopulation] = useRecoilState(prefecturePopulationState)

  const options = {
    title: {
      text: '人口推移'
    },
    xAxis: {
      title: {
        text: '年'
      }
    },
    yAxis: {
      title: {
        text: '人口'
      }
    },
    plotOptions: {
      series: {
        pointInterval: 5,
        pointStart: 1960
      }
    },
    series: prefecturePopulation
  }

  return (
    <Wrap>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Wrap>
  )
}

export default Chart
