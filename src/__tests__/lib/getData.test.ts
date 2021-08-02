import { getPrefectures } from '../../lib/getData'

describe('都道府県の取得', () => {
  test('RESAS APIからmessage: nullが返ってくる', async () => {
    const { message } = await getPrefectures()
    expect(message).toEqual(null)
  })
})
