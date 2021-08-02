import fetch from 'isomorphic-unfetch'
import { ApiKey, ResponsePrefectures } from '../models/Api'

export const key: ApiKey = {
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
  }
}

export async function getPrefectures(): Promise<ResponsePrefectures> {
  const data = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    key
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

  return { ...data }
}
