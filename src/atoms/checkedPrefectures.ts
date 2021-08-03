import { atom } from 'recoil'

export const checkedPrefecturesState = atom<number[]>({
  key: 'checkedPrefecturesState',
  default: []
})
