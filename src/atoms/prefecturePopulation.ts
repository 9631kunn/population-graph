import { atom } from 'recoil'
import { ChartPopulation } from '../models/Api'

export const prefecturePopulationState = atom<ChartPopulation[]>({
  key: 'prefecturePopulationState',
  default: []
})
