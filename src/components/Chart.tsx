import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = (): JSX.Element => {
  const options = {
    title: {
      text: '人口推移'
    },
    series: {
      data: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    }
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart
