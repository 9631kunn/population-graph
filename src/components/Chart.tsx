import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useRecoilState } from 'recoil'
import { prefecturePopulationState } from '../atoms/prefecturePopulation'

const Chart = (): JSX.Element => {
  const [prefecturePopulation] = useRecoilState(prefecturePopulationState)
  console.log(prefecturePopulation)

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

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart
