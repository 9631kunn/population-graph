// API呼び出し時に必要なレスポンスヘッダーのKey
export type ApiKey = {
  headers: {
    'X-API-KEY': string
  }
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
