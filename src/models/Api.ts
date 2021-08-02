// API呼び出し時に必要なレスポンスヘッダーのKey
export type ApiKey = {
  headers: {
    'X-API-KEY': string
  }
}

// チャートで使用する人口情報
export type ChartPopulation = {
  name: string
  data: number[]
}

// APIから返ってくる都道府県情報
export type ResponsePrefecture = {
  prefCode: number
  prefName: string
}

// APIから返ってくる都道府県情報の配列
export type ResponsePrefectures = {
  message: null | string
  result: [ResponsePrefecture]
}

// APIから返ってくる都道府県別人口情報の配列
export type ResponsePopulation = {
  message: null | string
  result: {
    boundaryYear: number
    data: [
      {
        label: string
        data: [
          {
            year: number
            value: number
            rate: number
          }
        ]
      }
    ]
  }
}
