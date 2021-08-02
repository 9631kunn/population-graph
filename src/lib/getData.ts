import fetch from 'isomorphic-unfetch'
import { ApiKey, ResponsePrefectures, ResponsePopulation } from '../models/Api'

// 環境変数
const NEXT_PUBLIC_RESAS_API_KEY: string = process.env.NEXT_PUBLIC_RESAS_API_KEY
  ? process.env.NEXT_PUBLIC_RESAS_API_KEY
  : ''

export const key: ApiKey = {
  headers: {
    'X-API-KEY': NEXT_PUBLIC_RESAS_API_KEY
  }
}

// 全都道府県
export async function getPrefectures(): Promise<ResponsePrefectures> {
  const data = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    key
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

  return { ...data }
}

// 都道府県別人口データ
export async function getPopulation(
  prefCode: number
): Promise<ResponsePopulation> {
  const data = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    key
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

  return data
}
