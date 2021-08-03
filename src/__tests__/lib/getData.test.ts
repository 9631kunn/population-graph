import { getPrefectures, getPopulation } from '../../lib/getData'

describe('都道府県の取得', () => {
  test('RESAS APIからmessage: nullが返ってくる', async () => {
    const { message } = await getPrefectures()
    expect(message).toEqual(null)
  })

  test('RESAS APIからmessage: nullが返ってくる', async () => {
    const { message } = await getPopulation(1)
    expect(message).toEqual(null)
  })
})
